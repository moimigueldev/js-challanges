const express = require('express');
const app = express();
const port = 4000;

const test = require('./modules/march/decoder');


console.log(test("pendisse potenti. Fusce finibus mollis nisl nec venenatisqsuSq.", 'q'))
// console.log(test("Lor-.tile gnicsipida rutetcesnoc ,tema tis rolod muspi me", '-'))





app.get('/', async (req, res) => {
  console.log('Main Url hit');
  res.send('JS-Challange modules');
});

app.listen(port, () => console.log('app on port', port));

