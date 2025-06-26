const path = require("path");

function filePath() {
  const file = "assess/images/Data.txt";
  const info = {
    basename: path.basename(file),
    dirname: path.dirname(file),
    extname: path.extname(file),
  };
  return info;
}

module.exports = { filePath };
