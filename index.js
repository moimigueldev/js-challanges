const express = require('express');
const app = express();
const port = 4000;

const test = require('./modules/july/short-long')

console.log('test', test('22', '1'))


app.get('/', async (req, res) => {
  res.send('JS-Challange modules')
});




app.listen(port, () => console.log('app on port', port));

