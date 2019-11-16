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
const sortArray = require('./modules/sort-the-odd');
const isValidIp = require('./modules/ip-validation');
const toWeirdCase = require('./modules/weird-string-case');
const genHash = require('./modules/hashtag-generator');
const tongues = require('./modules/tongues');

console.log(tongues('Ita dotf ni dyca nsaw ecc'));





app.get('/', async (req, res) => {
    console.log('Main Url hit');
    res.send('JS-Challange modules');
});

app.listen(port, () => console.log('app on port', port))
