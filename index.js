const express = require('express');
const app = express();
const port = 3000;

//modules
const firstReverse = require('./modules/first-reverse');
const divisibleCounts = require('./modules/count-divisibles');

// console.log(divisibleCounts(6, 11, 2))
console.log(divisibleCounts(101, 9223372036854775806, 11))






app.get('/', async (req, res) => {
    console.log('Main Url hit');
    res.send('JS-Challange modules');
});

app.listen(port, () => console.log('app on port', port))
