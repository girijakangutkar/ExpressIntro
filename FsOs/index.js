const express = require("express");
const { readData } = require("./read");
const os = require("os");
const dns = require("node:dns");

const app = express();

app.get("/test", (req, res) => {
  res.send("This route is working!");
});

app.get("/readfile", (req, res) => {
  const result = readData();
  res.send(result);
});

app.get("/systemdetails", (req, res) => {
  const TotalMem = (os.totalmem() / 1024 / 1024).toFixed(2);
  const FreeMem = (os.freemem() / 1024 / 1024).toFixed(2);
  const OsType = os.type();
  res.send({ Platform: OsType, Total_Memory: TotalMem, Free_Memory: FreeMem });
});

app.get("/getip", (req, res) => {
  dns.lookup("masaischool.com", (err, address, family) => {
    if (err) throw err;
    res.send({
      hostname: "https://masaischool.com",
      Family: family,
      ipAddress: address,
    });
  });
});
app.listen(3000, () => {
  console.log("Server is running on 3000 port.");
});
