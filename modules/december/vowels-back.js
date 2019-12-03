// You need to play around with the provided string (s).
// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.
// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'.
// Exceptions:
// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.
// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.
// Provided string will always be lower case, won't be empty and will have no special characters.

// Test.assertSimilar(vowelBack("testcase"), "tabtbvba");



function vowelBack(s) {
    const vowels = 'aeiou'
    const alpha = 'abcdefghijklmnopqrstuvwxyz'

    let newString = [...s].map((char, index, arr) => {
        if (vowels.includes(char)) { // it is a vowel, move vowels back 5 places
            // console.log(alpha.indexOf(char))
        } else {
            console.log(char)
        }
    })
}

module.exports = vowelBack;