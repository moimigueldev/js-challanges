// Complete the solution so that it splits the string into pairs of two characters. 
// If the string contains an odd number of characters then it should replace the missing second character
//  of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function splitString(str) {
    let results = str.split('');
    let newArr = [];

    results.length % 2 == 0 ? console.log('even'): results.push('_');
    
    results.some((item, index) => {
        index % 2 == 0 ? newArr.push(`${item}${results[index + 1]}`): null;
    })
    return newArr;
}

module.exports = splitString;