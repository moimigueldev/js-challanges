// https://www.codewars.com/kata/57a6633153ba33189e000074/train/javascript

// Count the number of occurrences of each character and
//  return it as a list of tuples in order of appearance. For empty output return an empty list.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

var orderedCount = function (string) {

    const arr = [];
    const used = [];

    for (let x of string) {
        if (!used.includes(x)) {
            const length = string.match(new RegExp(x, "g")).length;
            string = string.replace(new RegExp(x, "g"), '');
            arr.push([x, length])
            used.push(x)
        }
    }

    return arr;
}

module.exports = orderedCount;