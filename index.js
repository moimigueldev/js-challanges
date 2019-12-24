const express = require('express');
const app = express();
const port = 4000;

const test = require('./modules/december/take-a-picture');

// console.log(
//   test([
//     '2016.img1',
//     '2013.img3',
//     '2016.img2',
//     '2015.img3',
//     '2012.img7',
//     '2016.img4',
//     '2013.img5'
//   ])
// );

// console.log(test(['2016.img1']));

// console.log(
//   test(['2016.img1', '2016.img2', '2015.img3', '2016.img4', '2013.img5'])
// );

app.get('/', async (req, res) => {
  console.log('Main Url hit');
  res.send('JS-Challange modules');
});

app.listen(port, () => console.log('app on port', port));
