const express = require('express');
const app = express();
const port = 3000;

//modules
const firstReverse = require('./modules/first-reverse');
const whosNext = require('./modules/whos-next');

console.log(whosNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52))
// console.log(whosNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951))
// console.log(whosNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52))

app.get('/', async (req, res) => {
    console.log('Main Url hit');
    res.send('JS-Challange modules');
});

app.listen(port, () => console.log('app on port', port))
