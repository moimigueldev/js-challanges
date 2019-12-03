// The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.
// But some of the rats are deaf and are going the wrong way!
// Kata Task
// How many deaf rats are there?
// Legend
// P = The Pied Piper
// O~ = Rat going left
// ~O = Rat going right
// Example
// ex1 ~O~O~O~O P has 0 deaf rats
// ex2 P O~ O~ ~O O~ has 1 deaf rat
// ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats

var countDeafRats = function(town) {

    town = town.replace(/\s/g, '').split('P');
    const leftSide = town[0].match(/.{2}/g) || [];
    const ls = leftSide.filter(x => x === 'O~' ).length;
    const rightSide = town[1].match(/.{2}/g) || [];
    const rs = rightSide.filter(x => x === '~O').length;
    
     
    return ls + rs;
}


module.exports = countDeafRats;