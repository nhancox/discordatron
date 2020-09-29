const Discord = require("discord.js");

const MusicPlayer = require("./lib/MusicPlayer.js");
const config = require("./lib/config.js");

(async () => {
  await config.load();

  const client = new Discord.Client();
  const musicPlayer = new MusicPlayer();

  client.on("error", console.error);

  client.on("message", async (message) => {
    if (
      message.author.bot ||
      !message.content.startsWith(config.get("prefix"))
    ) {
      return;
    }

    message.sanitizedContent = message.content
      .split(/\s/u)
      .filter((element) => {
        return element.length && !/\s/u.test(element);
      });

    const command = message.sanitizedContent[0]
      .substring(config.get("prefix").length)
      .toLowerCase();

    if (command === "about") {
      let aboutMessage = "\nAbout Discordatron";
      aboutMessage += "\nProject Page: https://github.com/nhancox/discordatron";
      aboutMessage += "\nCopyright (c) 2020-present Nicholas Hancox";
      aboutMessage += "\nLicensed under the GNU General Public License v3.0";
      aboutMessage += "\n";
      await message.reply(aboutMessage).catch(console.error);
      return;
    }

    if (command === "help") {
      let helpMessage = `\n${config.get("name")} Help`;

      helpMessage += `\n`;
      helpMessage += `\n- \`${config.get(
        "prefix"
      )}about\`: Display info about Discordatron.`;
      helpMessage += `\n- \`${config.get(
        "prefix"
      )}help\`: Display this help dialogue with all bot commands.`;

      helpMessage += `\n\nMusicPlayer:`;
      Object.entries(MusicPlayer.commands()).forEach(
        ([commandName, description]) => {
          helpMessage += `\n  - \`${config.get(
            "prefix"
          )}${commandName}\`: ${description}`;
        }
      );

      helpMessage += "\n";
      await message.reply(helpMessage).catch(console.error);
      return;
    }

    if (Object.keys(MusicPlayer.commands()).includes(command)) {
      await musicPlayer[command](message);
    } else {
      await message.reply("Invalid command.").catch(console.error);
    }
  });

  client.login(config.get("token"));
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
