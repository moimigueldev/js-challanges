const express = require('express');
const app = express();
const port = 4000;


app.get('/', async (req, res) => {
  console.log('Main Url hit');
  res.send('JS-Challange modules');
});

console.log('test')

app.listen(port, () => console.log('app on port', port));

