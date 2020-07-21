const express = require('express');
const app = express();
const port = 4000;

const test = require('./modules/july/array-parity')

console.log('test', test([-3, 1, 2, 3, -1, -4, -2]))
// console.log('test', test([1, -1, 2, -2, 3]))


app.get('/', async (req, res) => {
  res.send('JS-Challange modules')
});




app.listen(port, () => console.log('app on port', port));

