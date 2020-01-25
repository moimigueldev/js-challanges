const express = require('express');
const app = express();
const port = 4000;

const test = require('./modules/january/stop-spinning-my-words');


console.log(test("Hey fellow warriors"))




app.get('/', async (req, res) => {
  console.log('Main Url hit');
  res.send('JS-Challange modules');
});

app.listen(port, () => console.log('app on port', port));

