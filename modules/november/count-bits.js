// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of
//  that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case


function countBits(n) {
    let count = 0;
    (n >>> 0).toString(2).split('').map(x => count += +x);
    
    return count
}

module.exports = countBits;