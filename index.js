const express = require('express');
const app = express();
const port = 4000;

const test = require('./modules/december/find-the-parity');

// console.log(test([160, 3, 1719, 19, 11, 13, -21]));
console.log(test([1, 1, 0, 1, 1]));

app.get('/', async (req, res) => {
  console.log('Main Url hit');
  res.send('JS-Challange modules');
});

app.listen(port, () => console.log('app on port', port));
