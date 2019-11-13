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

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
// console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
// console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']));

app.get('/', async (req, res) => {
    console.log('Main Url hit');
    res.send('JS-Challange modules');
});

app.listen(port, () => console.log('app on port', port))
