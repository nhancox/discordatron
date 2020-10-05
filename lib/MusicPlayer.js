const ytdl = require("ytdl-core-discord");

class MusicPlayer {
  constructor() {
    this.loopMode = false;
    this.musicQueue = [];
  }

  static commands() {
    return {
      loop: "Loop a single song. Deletes any existing queue.",
      play: "Add a song to the queue.",
      playnow: "Add a song to the front of the queue and immediately play it.",
      queue: "Display what is currently playing and what is in the queue.",
      remove: "Remove song at the requested position from the queue.",
      skip: "Skip the current song and move on to the next song in the queue.",
      stop: "Stop the music. Deletes any existing queue.",
    };
  }

  async loop(message) {
    await this.play(message, true);
  }

  async next(startLoop) {
    if (!this.musicQueue.length) {
      if (this.nowPlaying) {
        this.nowPlaying.message.member.voice.channel.leave();
        this.nowPlaying = null;
      }

      return;
    }

    this.nowPlaying = this.loopMode
      ? this.musicQueue[0]
      : this.musicQueue.shift();

    try {
      const voiceConnection = await this.nowPlaying.message.member.voice.channel.join();
      const musicStream = await ytdl(this.nowPlaying.musicInfo.video_url, {
        filter: "audioonly",
        quality: "highestaudio",
      });
      const dispatcher = voiceConnection.play(musicStream, { type: "opus" });

      dispatcher.on("start", async () => {
        if (!this.loopMode || startLoop) {
          await this.nowPlaying.message.channel.send(
            `Now Playing: ${this.nowPlaying.musicInfo.title} (requested by ${this.nowPlaying.message.author})`
          );
        }
      });

      dispatcher.on("error", console.error);

      dispatcher.on("finish", async () => {
        await this.next();
      });
    } catch (err) {
      console.error(err);
      await this.nowPlaying.message
        .reply("Unable to play song. Continuing queue.")
        .catch(console.error);
      await this.next();
    }
  }

  async play(message, startLoop) {
    if (!message.member.voice.channel) {
      await message
        .reply("You must be in a voice channel to play music.")
        .catch(console.error);
      return;
    }

    const musicURL = message.sanitizedContent[1];

    try {
      const musicInfo = await ytdl.getBasicInfo(musicURL);
      const queueEntry = { message, musicInfo };

      if (!startLoop) {
        this.musicQueue.push(queueEntry);
      } else {
        this.musicQueue = [queueEntry];
        this.loopMode = true;
      }

      const breakFromLoop = this.loopMode && !startLoop;

      if (breakFromLoop) {
        this.loopMode = false;
        this.musicQueue.shift();
      }

      if (!this.nowPlaying || startLoop || breakFromLoop) {
        await this.next(startLoop);
      } else {
        await message.reply(
          `Added to queue in position ${this.musicQueue.length}.`
        );
      }

      // eslint-disable-next-line
    } catch (err) {
      await message
        .reply("Unable to find music info. Not added to queue.")
        .catch(console.error);
    }
  }

  async playnow(message) {
    if (!message.member.voice.channel) {
      await message
        .reply("You must be in a voice channel to play music.")
        .catch(console.error);
      return;
    }

    if (this.loopMode) {
      await this.play(message);
      return;
    }

    const musicURL = message.sanitizedContent[1];

    try {
      const musicInfo = await ytdl.getBasicInfo(musicURL);
      const queueEntry = { message, musicInfo };

      this.musicQueue.unshift(queueEntry);
      this.loopMode = false;
      await this.next();

      // eslint-disable-next-line
    } catch (err) {
      await message
        .reply("Unable to find music info. Not added to queue")
        .catch(console.error);
    }
  }

  async queue(message) {
    if (this.loopMode) {
      await message
        .reply(`Currently looping: ${this.nowPlaying.musicInfo.title}`)
        .catch(console.error);
      return;
    }

    let queueList = "";

    if (!this.nowPlaying && !this.musicQueue.length) {
      queueList = "Nothing playing, queue empty";
    } else {
      if (this.nowPlaying) {
        queueList += `\nCurrent song: ${this.nowPlaying.musicInfo.title}`;
      } else {
        queueList += "\nCurrent song: [NONE]";
      }

      if (this.musicQueue.length) {
        queueList += "\nQueue:";

        this.musicQueue.forEach((entry, index) => {
          queueList += `\n  ${index + 1}. ${entry.musicInfo.title}`;
        });
      } else {
        queueList += "\nQueue: [EMPTY]";
      }
    }

    await message.reply(queueList).catch(console.error);
  }

  async remove(message) {
    if (this.loopMode) {
      await message
        .reply("Unable to remove songs while looping.")
        .catch(console.error);
      return;
    }

    if (!this.musicQueue.length) {
      await message
        .reply("There are no songs in the queue to remove.")
        .catch(console.error);
      return;
    }

    const requestedRemovePosition = Number.parseInt(
      message.sanitizedContent[1],
      10
    );

    if (Number.isNaN(requestedRemovePosition)) {
      await message
        .reply(
          "Input must be a number (position in queue of the song you want to remove)."
        )
        .catch(console.error);
      return;
    }

    if (
      requestedRemovePosition < 1 ||
      requestedRemovePosition > this.musicQueue.length
    ) {
      await message
        .reply("Invalid position; nothing to remove from queue.")
        .catch(console.error);
      return;
    }

    const [removedEntry] = this.musicQueue.splice(
      requestedRemovePosition - 1,
      1
    );
    await message
      .reply(
        `Removed ${removedEntry.musicInfo.title} from position ${requestedRemovePosition} (originally requested by ${removedEntry.message.author}).`
      )
      .catch(console.error);
  }

  async skip() {
    await this.next();
  }

  async stop(message) {
    if (!this.nowPlaying) {
      await message
        .reply("There is no music currently playing.")
        .catch(console.error);
      return;
    }

    const removedQueueEntries = this.musicQueue.length;
    const wasLooping = this.loopMode;

    this.loopMode = false;
    this.musicQueue = [];
    await this.next();

    let reply = "Music stopped.";

    if (wasLooping) {
      reply += " Looped music stopped.";
    } else if (removedQueueEntries) {
      reply += ` ${removedQueueEntries} entr${
        removedQueueEntries > 1 ? "ies" : "y"
      } ${removedQueueEntries > 1 ? "were" : "was"} removed from the queue.`;
    }

    await message.reply(reply).catch(console.error);
  }
}

module.exports = MusicPlayer;
