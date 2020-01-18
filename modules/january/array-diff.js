// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// array_diff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// array_diff([1,2,2,2,3],[2]) == [1,3]

// 19,-13,-7,-17,12,11,-16,18,15,-5,-14,-3,3,14,1,1,8,18,8,-19]
// ,[11,8,19,-7]


function array_diff(a, b) {
    if (!a.length) return [];
    if (!b.length) return a
    while (b.length) a.includes(b[0]) ? a.splice(a.indexOf(b[0]), 1) : b.shift()
    return a
}


module.exports = array_diff;