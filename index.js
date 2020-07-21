const express = require('express');
const app = express();
const port = 4000;

const test = require('./modules/july/remove-duplicates')

console.log('test', test([3, 4, 4, 3, 6, 3]))



app.get('/', async (req, res) => {
  res.send('JS-Challange modules')
});




app.listen(port, () => console.log('app on port', port));

