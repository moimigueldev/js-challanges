const express = require('express');
const app = express();
const port = 4000;

const test = require('./modules/holiday-shopping');


let queue = new test();

console.log(queue.addGift({ gift: 'Water gun', priority: 1}))
console.log(queue.addGift({ gift: '5', priority: 5}))
console.log(queue.addGift({ gift: '2', priority: 2}))
console.log(queue.addGift({ gift: '4', priority: 4}))
console.log(queue.addGift({ gift: '3', priority: 3}))

console.log('buying Gift', queue.buyGift())
console.log('buying Gift', queue.buyGift())
console.log('buying Gift', queue.buyGift())
console.log('buying Gift', queue.buyGift())
console.log('buying Gift', queue.buyGift())
console.log('buying Gift', queue.buyGift())
console.log('buying Gift', queue.buyGift())


app.get('/', async (req, res) => {
    console.log('Main Url hit');
    res.send('JS-Challange modules');
});

app.listen(port, () => console.log('app on port', port))
