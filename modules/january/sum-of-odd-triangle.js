// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8

function rowSumOddNumbers(n) {
    let firstIndex = n * (n - 1) + 1;
    let result = [];
    let final = 0


    while (result.length !== n) {
        result.push(firstIndex)
        firstIndex = firstIndex + 2

    }

    for (let index = 0; index < result.length; index++) {
        final += result[index]
    }



    return final
}

module.exports = rowSumOddNumbers;