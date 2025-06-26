const url = require("url");

function parseUrl() {
  const uri = new url("https://masaischool.com/course", true);
  console.log(uri.pathname);
  //   console.log(uri.);
  console.log(uri.query);
}

module.exports = { parseUrl };
