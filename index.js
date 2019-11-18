const express = require('express');
const app = express();
const port = 3000;

//modules
const firstReverse = require('./modules/first-reverse');
const fib = require('./modules/fib');

console.log(fib(20))






app.get('/', async (req, res) => {
    console.log('Main Url hit');
    res.send('JS-Challange modules');
});

app.listen(port, () => console.log('app on port', port))
