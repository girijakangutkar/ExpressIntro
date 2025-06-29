const { setTimeout } = require("node:timers/promises");
const { saysIT } = require("./eventLogger");

const setDelay = async (delay, msg) => {
  await setTimeout(Number(delay));
  saysIT(msg);
  return `Message "${msg}", emitted after ${delay}ms.`;
};

module.exports = setDelay;
