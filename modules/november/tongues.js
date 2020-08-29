// Gandalf's writings have long been available for study, but no one has yet figured out what language they are written in. 
// Recently, due to programming work by a hacker known only by the code name ROT13, 
// it has been discovered that Gandalf used nothing but a simple letter substitution scheme, 
// and further, that it is its own inverse|the same operation scrambles the message as unscrambles it.

// This operation is performed by replacing vowels in the sequence 'a' 'i' 'y' 'e' 'o' 'u' with the vowel three advanced, cyclicly,
//  while preserving case (i.e., lower or upper).
// Similarly, consonants are replaced from the sequence
//  'b' 'k' 'x' 'z' 'n' 'h' 'd' 'c' 'w' 'g' 'p' 'v' 'j' 'q' 't' 's' 'r' 'l' 'm' 'f'
//   by advancing ten letters.
// So for instance the phrase 'One ring to rule them all.' 
// translates to 'Ita dotf ni dyca nsaw ecc.'
// The fascinating thing about this transformation is that the resulting language yields pronounceable words. 
// For this problem, you will write code to translate Gandalf's manuscripts into plain text.
// Your job is to write a function that decodes Gandalf's writings.
// #Input
// The function will be passed a string for the function to decode. 
// Each string will contain up to 100 characters, representing some text written by Gandalf. 
// All characters will be plain ASCII, in the range space (32) to tilde (126).
// #Output 
// For each string passed to the decode function return its translation.

function tongues(code) {
    const vowels = 'aiyeou';
    const consonants = 'bkxznhdcwgpvjqtsrlmf'
   
    const vowelsMoveCount = 3;
    const consonantsMoveCount = 10;

    return code.split(' ').map(item => {
        return item.split('').map(ch => {
            let c = ch.toLowerCase()
            if (vowels.includes(c)) {
                return filterCha(ch, vowels, vowelsMoveCount)
            } else if (consonants.includes(c)) {
                return filterCha(ch, consonants, consonantsMoveCount);
            } else {
                return c
            }
        }).join('');
    }).join(' ')//end of first map
}


function filterCha(ch, arr, numbertoMove) {
    const isCapital = ch === arr[arr.indexOf(ch)] ? false : true;
    const c = ch.toLowerCase()

    

    if (arr.indexOf(c) + numbertoMove > arr.length - 1) {
        let diff = (arr.indexOf(c) + numbertoMove) - (arr.length - 1);
        return isCapital ? arr[diff - 1].toUpperCase() : arr[diff - 1]
    } 
        return isCapital ? arr[arr.indexOf(c) + numbertoMove].toUpperCase() : arr[arr.indexOf(c) + numbertoMove]
}


module.exports = tongues;