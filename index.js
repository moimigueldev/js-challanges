const express = require('express');
const app = express();
const port = 3000;
app.get('/', async (req, res) => {
  res.send('JS-Challange modules');
});

app.listen(port, () => console.log('app on port', port));
