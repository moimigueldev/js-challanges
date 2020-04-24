const express = require('express');
const app = express();
const port = 4000;


app.get('/', async (req, res) => {

  res.send('JS-Challange modules');
});

console.log('test ')

app.listen(port, () => console.log('app on port', port));

