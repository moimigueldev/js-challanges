const express = require('express');
const app = express();
const port = 4000;

const test = require('./modules/november/deaf-rats');

// console.log(test('~O~O~O~O P'))
console.log(test('~O~O~O~OO~P~O~OO~'))
// console.log(test('P O~ O~ ~O O~'))

// console.log(test('~O~O~O  ~O~O  O~~O~O~O~O  ~O~O~O~OO~~O~O~O~O~O~O  ~O~O~O~OO~  O~P'))


app.get('/', async (req, res) => {
    console.log('Main Url hit');
    res.send('JS-Challange modules');
});

app.listen(port, () => console.log('app on port', port))
