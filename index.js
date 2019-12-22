const express = require('express');
const app = express();
const port = 4000;

const test = require('./modules/december/sum-nums-digits');

console.log(test(-32));

app.get('/', async (req, res) => {
  console.log('Main Url hit');
  res.send('JS-Challange modules');
});

app.listen(port, () => console.log('app on port', port));
