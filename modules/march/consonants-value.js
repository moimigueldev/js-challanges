// Given a lowercase string that has alphabetic characters only and no spaces,
// return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"
// /https://www.codewars.com/kata/59c633e7dcc4053512000073/train/javascript



const alpha = 'abcdefghijklmnopqrstuvwxyz'
const vowels = 'aeiou'
function solve(s, stringsArr = []) {
    let max = 0


    if (!s.length) {
        stringsArr.forEach(c => {
            if (c.length === 1) {
                if (alpha.indexOf(c) + 1 >= max) {
                    max = alpha.indexOf(c) + 1
                }

            }

            let counter = 0
            c.split('').map(el => counter += alpha.indexOf(el) + 1)

            max = counter >= max ? counter : max


        })


        return max
    }

    let newString = ''

    for (let c of s) {
        if (vowels.includes(c)) {

            s = s.slice(1)
            break
        } else {
            newString += c
            s = s.slice(1)
        }
    }

    newString.length ? stringsArr.push(newString) : null
    return solve(s, stringsArr)

};

module.exports = solve;