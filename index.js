const express = require("express");
const app = express();
const port = 4000;

const test = require("./modules/july/recursion101");


console.log("test", test(100000000000, 3));

app.get("/", async (req, res) => {
  res.send("JS-Challange modules");
});

app.listen(port, () => console.log("app on port", port));
