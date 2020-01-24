// Given a triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// find the triangle's row knowing its index (the rows are 1-indexed), e.g.:

// odd_row(1)  ==  [1]
// odd_row(2)  ==  [3, 5]
// odd_row(3)  ==  [7, 9, 11]
// Note: your code should be optimized to handle big inputs.

// assert.deepEqual(oddRow(13), [157, 159, 161, 163, 165, 167, 169, 171,
//     173, 175, 177, 179, 181]);

function oddRow(n) {
    let firstIndex = n * (n - 1) + 1;
    let result = [];


    while (result.length !== n) {
        result.push(firstIndex)
        firstIndex = firstIndex + 2

    }

    return result

}

// function oddRow(n) {
//     return Array(n).fill(0).map((_, i) => n * n - n + 1 + i * 2);
// }
module.exports = oddRow 