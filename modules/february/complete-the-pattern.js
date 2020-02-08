// ###Task: You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

// Note:Returning the pattern is not the same as Printing the pattern.
// ####Rules/Note:

// If n < 1 then it should return "" i.e. empty string.
// There are no whitespaces in the pattern.
// ###Pattern:

// 1
// 22
// 333
// ....
// .....
// nnnnnn



function pattern(n) {

    let output = ''

    for (let index = 1; index <= n; index++) {

        output += index === n ? `${index}`.repeat(index) : `${index}`.repeat(index) + '\n'
    }

    return output;
}

// SECOND SOLUTION
// function pattern(n) {

//     if (n === 0) return ''

//     return new Array(n).fill('').map((el, index) => {

//         index += 1;
//         return index === n ? `${index}`.repeat(index) : `${index}`.repeat(index) + '\n'

//     }).join('')

// }


module.exports = pattern;