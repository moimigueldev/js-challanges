// Write a function that will find all the anagrams of a word from a list. 
// You will be given two inputs a word and an array with words. 
// You should return an array of all the anagrams or an empty array if there are none. 

// For example:
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     // MY SOLUTION THAT WORKS
//     // stringA.replace(/[!\s.-]/g, '');
//     // stringB.replace(/[!\s.-]/g, '');

//     stringA = stringA.replace(/[^\w]/g, ''); // \w will only return characters
//     stringB = stringB.replace(/[^\w]/g, '');


//     return (
//         stringA.toLowerCase().split('').sort().join('') 
//         === stringB.toLowerCase().split('').sort().join('')
//     )

// }





function anagrams(word, words) {
    return words.filter(w => {
        return word.split('').sort().join('') === w.split('').sort().join('');
    });
};


module.exports= anagrams;