// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without
//  any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

function uniqueInOrder(iterable) {
    // let newArr = [];
    // iterable = typeof iterable === 'string'? iterable.split(''): iterable

    // iterable.map(item => item === newArr[newArr.length -1]? null : newArr.push(item))

    // return newArr

    // [...iterable].filter(a => console.log('a', a)) // turns string into array

     return [...iterable].filter((a, i) => {
         return a !== iterable[i-1]
    })


}

module.exports = uniqueInOrder;