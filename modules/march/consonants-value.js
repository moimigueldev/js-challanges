// Given a lowercase string that has alphabetic characters only and no spaces,
// return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"
// /https://www.codewars.com/kata/59c633e7dcc4053512000073/train/javascript
function solve(s) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    const vowels = 'aeiou'
    console.log(alpha.length)
};

module.exports = solve;