const express = require("express");
const app = express();
const port = 4000;

const test = require("./modules/july/string-chars");

// console.log('test', test('Code'))
// console.log("test", test("*'&abcde12345"));
console.log("test", test("*'&ABCDabcde12345"));

app.get("/", async (req, res) => {
  res.send("JS-Challange modules");
});

app.listen(port, () => console.log("app on port", port));
