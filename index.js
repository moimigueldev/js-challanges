const express = require('express');
const app = express();
const port = 4000;

const test = require('./modules/july/casino-chips')

// console.log(test([4, 1, 1]))
// console.log(test([1, 2, 1]))
// console.log(test([1, 1, 1]))


app.get('/', async (req, res) => {
  res.send('JS-Challange modules')
});




app.listen(port, () => console.log('app on port', port));

