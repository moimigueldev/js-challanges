// Given a lowercase string that has alphabetic characters only and no spaces,
// return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"
// /https://www.codewars.com/kata/59c633e7dcc4053512000073/train/javascript
const alpha = 'abcdefghijklmnopqrstuvwxyz'
const vowels = 'aeiou'
function solve(s) {





    s.split('').forEach((c, i) => {
        if (vowels.includes(c)) {
            s = s.split('')
            s[i] = 0
            s = s.join('')
        }
    });
    console.log('s', s)

    console.log('final', s.split('0'))
};



// function solve(s, stringsArr = []) {

//     if (!s.length) {
//         console.log('done', s)
//         console.log('final', stringsArr)

//         return true
//     }

//     let newString = ''

//     for (let c of s) {
//         if (vowels.includes(c)) {
//             console.log('true', c)
//             s = s.slice(1)
//             break
//         } else {

//             newString += c
//             s = s.slice(1)
//         }
//     }

//     newString.length ? stringsArr.push(newString) : null

//     // console.log('fional', s)
//     // console.log('new String', newString)
//     console.log("arr", stringsArr)

//     return solve(s, stringsArr)

// };

module.exports = solve;