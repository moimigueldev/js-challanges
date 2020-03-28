// Complete the greatestProduct method so that
// it'll find the greatest product of five consecutive digits in the given string of digits.

// For example:

// greatestProduct("123834539327238239583") // should return 3240

function greatestProduct(input) {
    var m = input.substr(0, 5).split('').reduce((a, b) => parseInt(a) * parseInt(b), 1)
    for (var i = 1; i + 5 <= input.length; i++) {
        var l = input.substr(i, 5).split('').reduce((a, b) => parseInt(a) * parseInt(b), 1)
        if (l > m) { m = l }
    }
    return m
}

module.exports = greatestProduct