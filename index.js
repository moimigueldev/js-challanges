const express = require('express');
const app = express();
const port = 3000;

//modules
const firstReverse = require('./modules/first-reverse');
const squareDigits = require('./modules/square-digits')
const order = require('./modules/order');
const spinWords = require('./modules/spin-words');
const countBits = require('./modules/count-bits');
const persistentBugger = require('./modules/persistent-bugger');
const duplicateCount = require('./modules/duplicate-count');
const splitString = require('./modules/split-string');
const anagrams = require('./modules/anagrams');
const uniqueInOrder = require('./modules/unique-in-order');

// console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder('ABBCcAD'));
// console.log(uniqueInOrder([1,2,2,3,3]));

app.get('/', async (req, res) => {
    console.log('Main Url hit');
    res.send('JS-Challange modules');
});

app.listen(port, () => console.log('app on port', port))
