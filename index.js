const express = require('express');
const app = express();
const port = 4000;

const test = require('./modules/january/interleaving-arrays');


console.log(test([1, 2, 3], ["c", "d", "e"]))




app.get('/', async (req, res) => {
  console.log('Main Url hit');
  res.send('JS-Challange modules');
});

app.listen(port, () => console.log('app on port', port));

