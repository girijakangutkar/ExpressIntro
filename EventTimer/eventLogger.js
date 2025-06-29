const EventEmt = require("events");
const emt = new EventEmt();

emt.on("event", (msg) => {
  console.log({ msg: msg, timeStamp: new Date() });
});

const saysIT = (msg) => {
  return emt.emit("event", msg);
};

module.exports = { saysIT };
