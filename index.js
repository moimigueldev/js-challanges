const express = require('express');
const app = express();
const port = 4000;

const test = require('./modules/july/fix-string-case')

// console.log('test', test('Code'))
console.log('test', test('coDE'))


app.get('/', async (req, res) => {
  res.send('JS-Challange modules')
});




app.listen(port, () => console.log('app on port', port));

