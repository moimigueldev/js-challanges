const express = require('express');
const app = express();
const port = 3000;

//modules
const firstReverse = require('./modules/first-reverse');
const squareDigits = require('./modules/square-digits')
const order = require('./modules/order');
const spinWords = require('./modules/spin-words');
const countBits = require('./modules/count-bits');

console.log(countBits(1234))
console.log(countBits(7))


app.get('/', async (req, res) => {
    console.log('Main Url hit');
    res.send('JS-Challange modules');
});

app.listen(port, () => console.log('app on port', port))
