const express = require('express');
const app = express();
const port = 4000;

const test = require('./modules/january/array-diff');

console.log(test([1,2],[1]))
console.log(test([1,2,2,2,2,3],[2]))
// console.log(test([], [4,5]))
// console.log(test([19,-13,-7,-17,12,11,-16,18,15,-5,-14,-3,3,14,1,1,8,18,8,-19],[11,8,19,-7]))

app.get('/', async (req, res) => {
  console.log('Main Url hit');
  res.send('JS-Challange modules');
});

app.listen(port, () => console.log('app on port', port));
