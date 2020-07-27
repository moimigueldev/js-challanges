// https://www.codewars.com/kata/59c5f4e9d751df43cf000035/train/javascript

// The vowel substrings in the word codewarriors are o,e,a,io. 
// The longest of these has a length of 2. Given a l
// owercase string that has alphabetic characters only (both vowels and consonants) 
// and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// Good luck!

// If you like substring Katas, please try:

// Non-even substrings

function solve(s) {
    const vowels = 'aeiou'
    let stringResult = '';
    const arr = []

    for (const x of s) {
        // console.log(x)
        if (vowels.includes(x)) {
            stringResult = x + stringResult
        } else {
            if (stringResult !== '') {
                arr.push(stringResult.length);
                stringResult = '';
            }
        }
    }
    return arr.sort((a, b) => b - a)[0];
}


module.exports = solve;