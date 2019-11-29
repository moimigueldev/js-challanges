const express = require('express');
const app = express();
const port = 4000;

const test = require('./modules/november/sort-arrays');

console.log(test(["Hello", "there", "I'm", "fine"]))




app.get('/', async (req, res) => {
    console.log('Main Url hit');
    res.send('JS-Challange modules');
});

app.listen(port, () => console.log('app on port', port))
