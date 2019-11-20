// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

    n = String(n)

    return String(n).match(/-\d+/) ?  Number('-' + n.substring(1).split('').reverse().join('')) : Number(n.split('').reverse().join(''))



    // console.log(Number(String(n).split('').reverse('').join('')))

    
}

module.exports = reverseInt;
