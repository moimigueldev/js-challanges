const express = require('express');
const app = express();
const port = 4000;

const test = require('./modules/march/even-odd');

console.log(test([1, 2, 6, 1, 6, 3, 1, 9, 6]))






app.get('/', async (req, res) => {
  console.log('Main Url hit');
  res.send('JS-Challange modules');
});

app.listen(port, () => console.log('app on port', port));

