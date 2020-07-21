const express = require('express');
const app = express();
const port = 4000;

const test = require('./modules/july/fake-binary')

console.log('test', test('45385593107843568'))



app.get('/', async (req, res) => {
  res.send('JS-Challange modules')
});




app.listen(port, () => console.log('app on port', port));

