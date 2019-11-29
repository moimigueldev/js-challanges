// Write a function that takes in a string of one or more words, and returns the same string, 
// but with all five or more letter words reversed (Just like the name of this Kata). 
// Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:
//  spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
 
// RETURN THE STRING WITH ONLY WORDS THAT LENGTHS ARE 5 OR HIGHER REVERSED

function spinWords(str){
    
    let results = str.split(' ');

    str.split(' ').map((x, i) => {
        x.length >= 5? results[i] = x.split('').reverse().join(''): null
    })

    return results.join(' ');
  }

  module.exports=spinWords;

