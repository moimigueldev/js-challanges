const express = require('express');
const app = express();
const port = 4000;

// const test = require('./modules/december/vowels-back');
const test = require('./modules/december/pairs-of-bears');

// console.log(test(3, '88Bifk8hB8BB8BBBB888chl8BhBfd'))
// console.log(test(7, '8j8mBliB8gimjB8B8jlB'))
// console.log(test(7, 'rgsfdyeb'))
console.log(test(4, 'Bak8e8B88gBBi8m88BB8BhBBhl'))


app.get('/', async (req, res) => {
    console.log('Main Url hit');
    res.send('JS-Challange modules');
});

app.listen(port, () => console.log('app on port', port))
