// Write a function named sumDigits which takes a number as input
// and returns the sum of the absolute value of each of the number's decimal digits. For example:

//   sumDigits(10);  // Returns 1
//   sumDigits(99);  // Returns 18
//   sumDigits(-32); // Returns 5

function sumDigits(number) {
  let results = 0;

  number = [...number.toString()]
    .filter(x => Number(x))
    .map(x => (results += Number(x)));

  return results;
}

module.exports = sumDigits;
