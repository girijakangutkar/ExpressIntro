const setDelay = require("./delay");
const { saysIT } = require("./eventLogger");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

app.get("/emit", (req, res) => {
  const msg = req.query.msg || "Hello!";
  saysIT(msg);
  res.send(`${msg}`);
});

app.get("/delay", async (req, res) => {
  let delay = req.query.delay;
  let msg = req.query.msg;
  if (!delay || isNaN(delay)) {
    return res.status(400).send("Invalid delay value");
  }

  const result = await setDelay(delay, msg);
  res.send(result);
});

app.listen(3000, () => {
  console.log("App is listing...");
});
