const fs = require("fs");

function readData() {
  const info = fs.readFileSync("Data.txt", "utf-8");
  console.log(info);
  return info;
}

module.exports = { readData };
