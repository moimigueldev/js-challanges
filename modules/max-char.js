// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let charObj = {}

    str
    .split('')
    .forEach(item =>!(item in charObj) ? charObj[item] = 0 : charObj[item] += 1);


   return Object.keys(charObj)
   .reduce((a, b) =>charObj[b] < charObj[a] ? a : b)
    
}

module.exports = maxChar;
