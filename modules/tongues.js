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
    const vowels = ['a', 'i', 'y', 'e', 'o', 'u'];
    const consonants = [
        'b', 'k', 'x', 'z', 
        'n', 'h', 'd', 'c',
        'w', 'g', 'p', 'v', 
        'j', 'q', 't', 's', 
        'r', 'l', 'm', 'f'];

    const vowelsMoveCount = 3;
    const consonantsMoveCount = 10;

        // console.log('is', 'u' === 'u')

        // let newC = vowels[vowels.indexOf('o') + 3];
        // console.log('new C', newC);
        // console.log('length', vowels.length)
        // console.log('a' === vowels[vowels.indexOf('a'));
        // console.log('a' === vowels[vowels.indexOf('A')])
    
    code = code.split(' ').map((item, i, arr) => {
        item = item.split('').map(ch => {
            let c = ch.toLowerCase()
    
            if(vowels.includes(c)) {
                // console.log('ch', isCapital, ch)
                // console.log('returning', filterCha(c, vowels))

                return filterCha(ch, vowels, vowelsMoveCount)

                // if(vowels[vowels.indexOf(c)] === c) {
                //     let newC = vowels[vowels.indexOf(c) + 3];
                //     if(vowels.indexOf(c) + 3 > vowels.length - 1) {
                //         let diff = (vowels.indexOf(c) + 3) - (vowels.length - 1);
                //         // console.log( c, vowels[diff -1 ])
                //         // console.log('differnce', isCapital, vowels[vowels.indexOf(c)])
                //         return isCapital ? vowels[diff -1 ].toUpperCase():vowels[diff -1 ]

                //     } else {
                        

                //         return isCapital ? vowels[vowels.indexOf(c) + 3].toUpperCase() : vowels[vowels.indexOf(c) + 3]

                //         // console.log(c, vowels[vowels.indexOf(c) + 3])
                //         // return vowels[vowels.indexOf(c) + 3]
                //     }

                //     // console.log('new C', c)
                    
                // } else {
                //     // console.log('capital', c)
                    
                // }
            } else if(consonants.includes(c)) {
                

                return filterCha(ch, consonants, consonantsMoveCount);

                // if(consonants[consonants.indexOf(c)] === c) {
                //     let newC = consonants[consonants.indexOf(c) + 10];

                //     if(consonants.indexOf(c) + 10 > consonants.length - 1) {
                //         // console.log('un', c)
                //         let diff = (consonants.indexOf(c) + 10) - (consonants.length - 1);
                //         // console.log( c, consonants[diff -1 ])
                        
                        
                //         return consonants[diff -1 ];

                //     } else {
                //         // console.log(c, consonants[consonants.indexOf(c) + 10])
                //         return consonants[consonants.indexOf(c) + 10]
                //     }

                //     // console.log('new C', c)
                    
                // } else {
                //     // console.log('capital', c)
                    
                // }
                
            } else {
                console.log('not a ltter')
            }
        })//end of second map

        return item.join('')

        // console.log('item', item.join(''))
     
    }).join(' ')//end of first map

    // console.log('final', code)





return code
}


function filterCha(ch, arr, numbertoMove) {
    let isCapital = ch === arr[arr.indexOf(ch)] ? false: true;
    

    let c = ch.toLowerCase()

    if(arr[arr.indexOf(c)] === c) {
        let newC = arr[arr.indexOf(c) + numbertoMove];
        if(arr.indexOf(c) + numbertoMove > arr.length - 1) {
            let diff = (arr.indexOf(c) + numbertoMove) - (arr.length - 1);
            // console.log( c, arr[diff -1 ])
            // console.log('differnce', isCapital, arr[arr.indexOf(c)])
            return isCapital ? arr[diff -1 ].toUpperCase():arr[diff -1 ]

        } else {
            

            return isCapital ? arr[arr.indexOf(c) + numbertoMove].toUpperCase() : arr[arr.indexOf(c) + numbertoMove]

            // console.log(c, arr[arr.indexOf(c) + 3])
            // return arr[arr.indexOf(c) + 3]
        }

        // console.log('new C', c)
        
    } else {
        // console.log('capital', c)
        
    }
}


module.exports = tongues;