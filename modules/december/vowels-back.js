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

// wgrgihevzcphxnyligez
// fpapdqavibyqgwhudpai
// fpapiqavibyqgwhuipai // what I sahould have
// fpapiqavibyqgwhuipai

// const vowels = 'aeiou'
// const alpha = 'abcdefghijklmnopqrstuvwxyz'
// const reverseAlpha = 'zyxwvutsrqponmlkjihgfedcba'

// function vowelBack(s) {
//     return [...s]
//     .map(char => vowels.includes(char) ? vowel(char) : consonants(char)).join('');

// }

// function revertToOriginal(original, char) {
//     return 'code'.includes(char) ? original : char
// }

// function vowel(char, numToMove) {
//     let num = numToMove || specialCase(char, 5);

//     return alpha.indexOf(char) - num   < 0 ?
//     revertToOriginal(char, reverseAlpha[((alpha.indexOf(char) - num) + 1) * -1]) :
//     revertToOriginal(char, alpha[(alpha.indexOf(char) - num)])
// } 

// function consonants(char) {
//     let num = specialCase(char, 9)

//     if(num !== 9) return vowel(char, num);

//     let diff = (alpha.indexOf(char) + num) - alpha.length

//     return alpha.indexOf(char) + num >= alpha.length ? revertToOriginal(char, alpha[diff]):
//     revertToOriginal(char, alpha[alpha.indexOf(char) + num])     
// }

// function specialCase(char, num) {
//     switch(char) {
//         case 'e' :
//             return 4
//         case 'c':
//             return 1
//         case 'o' :
//             return 1
//         case 'd' : 
//             return 3
//         default : 
//         return num
//     }
// }


    abc = "abcdefghijklmnopqrstuvwxyz";
key = "vkbaafpqistuvwnyzabtpvfghi";
const vowelBack = s => s.split("").map(v=>key[abc.indexOf(v)]).join("");


module.exports = vowelBack;