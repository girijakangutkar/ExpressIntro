const express = require("express");

const app = express();

const port = 3000;

app.get("", (req, res) => {
  res.send("Welcome to the express");
});

app.get("/home", (req, res) => {
  res.send("This is home page");
});

app.get("/contactus", (req, res) => {
  //   console.log("Contact us at");
  res.send("Contact us at contact@contact.com");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
