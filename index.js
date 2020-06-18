const express = require('express');
const app = express();
const port = 4000;

const test = require('./modules/june/sum')

console.log(test(25))


app.get('/', async (req, res) => {
  res.send('JS-Challange modules')
});




app.listen(port, () => console.log('app on port', port));

