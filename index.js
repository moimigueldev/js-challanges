const express = require('express');
const app = express();
const port = 4000;

const test = require('./modules/june/word')

console.log(test('We often read book, a word hidden in the book.'))


app.get('/', async (req, res) => {
  res.send('JS-Challange modules')
});




app.listen(port, () => console.log('app on port', port));

