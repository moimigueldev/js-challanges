const express = require('express');
const app = express();
const port = 4000;

const test = require('./modules/february/pandemia');

// console.log(test('XXXXX'))
console.log(test('01X000X010X011XX'))
// console.log(test('0000000'))

// console.log(test('01000000X000X011X0X'))




app.get('/', async (req, res) => {
  console.log('Main Url hit');
  res.send('JS-Challange modules');
});

app.listen(port, () => console.log('app on port', port));

