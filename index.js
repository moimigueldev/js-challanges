const express = require('express');
const app = express();
const port = 4000;

const test = require('./modules/january/transform');

s="\"Title\"\nDate class \n.\n.\n\"Connected\"\nfifo, \nisoYear, \ndaynum, \nargfirst, \nmonthend, \nweeknum, \nassoc.quantity, \nyearstart, \nrank, \ntoday."

console.log(test(s))


app.get('/', async (req, res) => {
  console.log('Main Url hit');
  res.send('JS-Challange modules');
});

app.listen(port, () => console.log('app on port', port));
