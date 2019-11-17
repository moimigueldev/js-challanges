const express = require('express');
const app = express();
const port = 3000;

//modules
const firstReverse = require('./modules/first-reverse');
const createPhone = require('./modules/create-phone');

console.log(createPhone([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

app.get('/', async (req, res) => {
    console.log('Main Url hit');
    res.send('JS-Challange modules');
});

app.listen(port, () => console.log('app on port', port))
