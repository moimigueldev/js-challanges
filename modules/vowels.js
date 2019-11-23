// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {


    return str.toLowerCase().match(/[aeiou]/g).length
    
    //    return str
    //    .toLowerCase()
    //    .split('')
    //    .filter(x => x.match(/[aeiou]/) ? x : null ).length
        
    }
    
    module.exports = vowels;
    