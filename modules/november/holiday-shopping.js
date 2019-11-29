// var giftList = new HolidayPriorityQueue();
// giftList.addGift( { gift: 'Water gun', priority: 1} );// => returns 1
// giftList.addGift( { gift: 'Toy truck', priority: 4 } );// => returns 2
// giftList.addGift( { gift: 'Roller Skates', priority: 3 } );// => returns 3

// giftList.buyGift();// => returns 'Water gun'
// giftList.buyGift();// => returns 'Roller Skates'
// giftList.buyGift();// => returns 'Toy truck'

class HolidayPriorityQueue {
    constructor() {
        this.list = []
    }


    sort() {

        return this.list.length <= 1 ? this.list : 
        this.list = this.list.sort((a, b) => a.priority - b.priority)
    }

    addGift(gift) {
        this.list.push(gift)
        this.list = this.sort();
        return this.list.length;
    }

    buyGift() {
        return this.list.length >= 1 ? this.list.shift().gift : '';
    }


}

module.exports = HolidayPriorityQueue;