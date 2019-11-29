const express = require('express');
const app = express();
const port = 4000;

const test = require('./modules/november/greed-is-good');

console.log(test([5, 1, 3, 4, 1]))
// console.log(test([2, 3, 4, 6, 2]))
// console.log(test([1, 1, 1, 3, 1]))
// console.log(test([2, 4, 4, 5, 4]))
// console.log(test([5, 1, 3, 1, 1]))




app.get('/', async (req, res) => {
    console.log('Main Url hit');
    res.send('JS-Challange modules');
});

app.listen(port, () => console.log('app on port', port))
