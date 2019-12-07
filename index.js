const express = require('express');
const app = express();
const port = 4000;

const test = require('./modules/december/vowels-back');

console.log(test('wgrgihevzcphxnyligez'))

console.log('wgrgihevzcphxnyligez'.length)
console.log('fpapdqavibyqgwhudpai'.length)

// fpapiqavibyqgwhuipai
app.get('/', async (req, res) => {
    console.log('Main Url hit');
    res.send('JS-Challange modules');
});

app.listen(port, () => console.log('app on port', port))
