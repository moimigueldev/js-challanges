const express = require('express');
const app = express();
const port = 4000;

const test = require('./modules/december/expressions-matter');

// console.log(test(1, 2, 3));
console.log(test(1, 1, 1));

app.get('/', async (req, res) => {
  console.log('Main Url hit');
  res.send('JS-Challange modules');
});

app.listen(port, () => console.log('app on port', port));
