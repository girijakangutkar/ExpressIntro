const express = require("express");
const { parseUrl } = require("./urlparser");
const { filePath } = require("./fileinfo");

const app = express();

const port = 3000;

app.get("", (req, res) => {
  res.send("Welcome to the express");
});

app.get("/parseurl", (req, res) => {
  res.send(parseUrl());
});

app.get("/filepath", (req, res) => {
  const info = filePath();
  res.send(info);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
