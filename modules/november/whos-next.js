// Sheldon, Leonard, Penny, Rajesh and Howard are in the queue for a "Double Cola" 
// drink vending machine; there are no other people in the queue. The first one in the queue (
// Sheldon) buys a can, drinks it and doubles! The resulting two Sheldons go to the end of the queue. 
// Then the next in the queue (Leonard) buys a can, drinks it and gets to the end of the queue as two Leonards, 
// and so on.
// For example, 
// Penny drinks the third can of cola and the queue will 
// look like this:
// Rajesh, Howard, Sheldon, Sheldon, Leonard, Leonard, 
// Penny, Penny
// Write a program that will return the name of the person who will drink the n-th cola.
// Input
// The input data consist of an array which contains at least 1 name,
//  and single integer n which may go as high as the biggest number your
//  language of choice supports (if there's such limit, of course).

// Output / Examples
// Return the single line — the name of the person who drinks the n-th can of cola. The cans are numbered starting from 1.



function whoIsNext(names, r){
    var peopleInLine = names.length;
    var copiesOfEachPerson = 1;
    
    while (r > peopleInLine) {
      r -= peopleInLine;
      copiesOfEachPerson *= 2;
      peopleInLine *= 2;
    }
    
    return names[Math.floor((r - 1) / copiesOfEachPerson) % peopleInLine];


}

  module.exports = whoIsNext;

// THIS SOLUTION TAKES TO MANY LOOPS AND TIMES OUT
//   function whoIsNext(names, r){

//     let count = r;

//     while(count > 0) {
//         let current = names.shift();
//         names.push(current, current)
//         count--;
//     }
    
//     return names [names.length - 1 ]
    
//   }




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





module.exports = vowelBack;