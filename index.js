const express = require('express');
const app = express();
const port = 4000;

const test = require('./modules/february/men-boys');


console.log(test([7, 3, 14, 17]))
// console.log(test([49, 818, -282, 900, 928, 281, -282, -1]))





app.get('/', async (req, res) => {
  console.log('Main Url hit');
  res.send('JS-Challange modules');
});

app.listen(port, () => console.log('app on port', port));

