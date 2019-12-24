const express = require('express');
const app = express();
const port = 4000;

const test = require('./modules/december/ten-min-walk');

console.log(test(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));

app.get('/', async (req, res) => {
  console.log('Main Url hit');
  res.send('JS-Challange modules');
});

app.listen(port, () => console.log('app on port', port));
