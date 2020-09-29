# Discordatron

A Discord bot using Node.js.

## Installation and Use

Has been tested on Node.js v12 (current LTS).

```sh
git clone https://github.com/nhancox/discordatron.git
```

Create a `config.json` in the root of the project with your settings. The only
required value is `token` which is where you should place your Discord API
token. For an example, see the `exampleConfig.json`.

Defaults:

- Bot name: Discordatron
- Command prefix: !

```sh
npm install
npm start
```

## Features

Use the `help` (default: `!help`) command to see all currently supported
commands.

Has a music player with a `youtube-dl` back-end that can play music in voice
channels. Includes queue and loop functionality.

## Planned Updates

- Command to remove songs from queue
- Command to show the currently playing song without displaying the entire queue
- Integrate Docker for easy hosting

## License

Copyright (c) 2020-present Nicholas Hancox

Licensed under the GNU General Public License v3.0
