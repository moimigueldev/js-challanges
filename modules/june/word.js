// No Story

// No Description

// Only by Thinking and Testing

// Look at result of testcase, guess the code!

// Thinking & Testing : How many "word"?
function testit(s) {
    return (s.match(/w.*?o.*?r.*?d/ig) || []).length;
}
// function testit(s) {
//     let newString = s.toLowerCase().split('').filter(x => {
//         if (x === 'w' || x === 'o' || x === 'r' || x === 'd') return x
//     }).join('').match(/word/g) || []
//     // console.log('newString', newString.length)
//     return newString.length
// };

module.exports = testit;