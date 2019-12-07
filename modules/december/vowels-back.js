// You need to play around with the provided string (s).
// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.
// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'.
// Exceptions:
// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.
// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.
// Provided string will always be lower case, won't be empty and will have no special characters.

// Test.assertSimilar(vowelBack("testcase"), "tabtbvba");
// Test.assertSimilar(vowelBack("testcase"), "tabtbvba");

// t moved forward 9 spaces is c



function vowelBack(s) {
    const vowels = 'aeiou'
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    const reverseAlpha = 'zyxwvutsrqponmlkjihgfedcba'
    console.log(reverseAlpha)

    let newString = [...s].map((char, index, arr) => {
        if (vowels.includes(char)) { // it is a vowel, move vowels back 5 places
            // console.log(alpha.indexOf(char))
            // console.log('diff', alpha[(alpha.indexOf(char) - 5) + 1] ) 
    
    
            
            // console.log('-'.repeat(40))
            if (alpha.indexOf(char) - 5   < 0) {
                console.log('char', char, ((alpha.indexOf(char) - 5) + 1) * -1 )
                return reverseAlpha[((alpha.indexOf(char) - 5) + 1) * -1]
            } else {
                return alpha[(alpha.indexOf(char) - 5)]
            }
        
        } else { // consanents
            // console.log(alpha[alpha.indexOf(char)])
            // console.log(alpha.indexOf(char))
            // let diff = (alpha.indexOf(char) + 9) - alpha.length
            // return alpha.indexOf(char) + 9 > alpha.length ? alpha[diff] :  alpha[alpha.indexOf(char) + 9] 
        }
    });// end of new string

    console.log('results', newString)
}

module.exports = vowelBack;