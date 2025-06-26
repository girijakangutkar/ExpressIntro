const boxen = require("boxen");

const text = "Hurray!!!";
const message = "I am using my first external module!";

console.log(boxen(message, { title: text }));

console.log(
  boxen(message, {
    title: text,
    backgroundColor: "blueBright",
    borderStyle: "double",
  })
);

console.log(boxen(message, { title: text, borderStyle: "round" }));
