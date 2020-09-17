const fs = require("fs").promises;
const path = require("path");

let loadedConfig = null;

function get(configVariable) {
  if (!loadedConfig) {
    throw new Error("No config currently loaded");
  }

  if (!Object.prototype.hasOwnProperty.call(loadedConfig, configVariable)) {
    throw new Error(`${configVariable} not found in config`);
  }

  return loadedConfig[configVariable];
}

async function load() {
  const configPath = path.resolve(__dirname, "..", "config.json");

  let configFile = await fs.readFile(configPath);

  if (!configFile) {
    throw new Error("No config.json detected");
  }

  try {
    configFile = JSON.parse(configFile);

    // eslint-disable-next-line
  } catch (err) {
    throw new Error("Unable to parse config.json");
  }

  const parsedConfig = {
    name: configFile.name || "Discordatron",
    prefix: configFile.prefix || "!",
    token: configFile.token,
  };

  if (!parsedConfig.token) {
    throw new Error("No Discord API token found in config.json");
  }

  loadedConfig = parsedConfig;
}

module.exports = { get, load };
