const express = require('express');
const app = express();
const port = 4000;

const test = require('./modules/december/shortest-word');

console.log(test('bitcoin take over the world maybe who knows perhaps'));

app.get('/', async (req, res) => {
  console.log('Main Url hit');
  res.send('JS-Challange modules');
});

app.listen(port, () => console.log('app on port', port));
