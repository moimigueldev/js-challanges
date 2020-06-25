// Task
// Given a positive integer n, calculate the following sum:
// n + n/2 + n/4 + n/8 + ...


function halvingSum(n) {
    const arr = [];
    let count = 0;

    while (n >= 1) {
        n = n / 2
        count = Math.floor(n) + count;
    }
    return count;
}
module.exports = halvingSum;