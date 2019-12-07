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

const vowels = 'aeiou'
const alpha = 'abcdefghijklmnopqrstuvwxyz'
const reverseAlpha = 'zyxwvutsrqponmlkjihgfedcba'

function vowelBack(s) {

    let newString = [...s].map((char, index, arr) => {
        if (vowels.includes(char)) { // it is a vowel, move vowels back 5 places
            let num = 5;

            // return vowel(char)
            // return alpha.indexOf(char) - num   < 0 ?
            // reverseAlpha[((alpha.indexOf(char) - num) + 1) * -1] :
            // alpha[(alpha.indexOf(char) - num)]
        
        } else { // consanents

            return consonants(char)
            // let num = 9
            // let diff = (alpha.indexOf(char) + num) - alpha.length
            // return alpha.indexOf(char) + num > alpha.length ? revertToOriginal(char, alpha[diff]):
            // revertToOriginal(char, alpha[alpha.indexOf(char) + num]) 
        }
    }).join('');// end of new string

    console.log('final', newString)

}

function revertToOriginal(original, char) {
    let revert = 'code';
    return revert.includes(char) ? original : char
}

function vowel(char, numToMove) {
    console.log('cowe', char, numToMove)
    let num = 5;
    // return alpha.indexOf(char) - num   < 0 ?
    // reverseAlpha[((alpha.indexOf(char) - num) + 1) * -1] :
    // alpha[(alpha.indexOf(char) - num)]
} 

function consonants(char) {
    let num = specialCase(char, 9)
    // let test = specialCase(char, 9)


    if(num !== 9) {
        return vowel(char, num)
    } else {
        
    let diff = (alpha.indexOf(char) + num) - alpha.length
    return alpha.indexOf(char) + num > alpha.length ? revertToOriginal(char, alpha[diff]):
    revertToOriginal(char, alpha[alpha.indexOf(char) + num]) 
    }

    
    
}

function specialCase(char, num) {
    // console.log('char', char)
    // If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.
    switch(char) {
        case 'e' :
            
            return 4
        case 'c':
            return 1
        case 'o' :
            return 1
        case 'd' : 
            return 3
        default : 
        return num
    }
}

module.exports = vowelBack;