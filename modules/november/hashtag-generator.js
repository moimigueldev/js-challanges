// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag(str) {
   
    let newStr =str.
    split(' ')
    .filter((item) => item)
    .map(item =>  item.charAt(0).toUpperCase() + item.substring(1)).join('')


    return newStr.length >= 140 ||  newStr.length <= 1 ? false : "#" + newStr;
}

module.exports = generateHashtag;