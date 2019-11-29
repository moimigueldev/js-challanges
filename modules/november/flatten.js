// flatten(1, [2, 3], 4, 5, [6, [7]]) // returns [1, 2, 3, 4, 5, 6, 7]
// flatten('a', ['b', 2], 3, null, [[4], ['c']]) // returns ['a', 'b', 2, 3, null, 4, 'c']

function flatten() {

    // let s = '';

    // console.log()

    // s = s.replace(/,/g, '').split('');

    // console.log(s)

    // var s = 0;
    // for (var i=0; i < arguments.length; i++) {
    //     s += arguments[i];
    // }
    return [...arguments].join('').replace(/,/g, '').split('');
}

module.exports = flatten;