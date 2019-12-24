// Given three integers a ,b ,c,
// return the largest number obtained after inserting
// the following operators and brackets: +, *, ().

// Consider an Example :
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.

// Notes
// The numbers are always positive.
// The numbers are in the range (1  ≤  a, b, c  ≤  10).
// You can use the same operation more than once.
// It's not necessary to place all the signs and brackets.
// Repetition in numbers may occur .
// You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.

// eval turns string equations to regular math equations

function expressionMatter(a, b, c) {
  return Math.max(
    a + b + c,
    a * b * c,
    a * (b + c),
    (a + b) * c,
    a + b * c,
    a * b + c
  );
}

// function expressionMatter(a, b, c) {
//   const expressions = [
//     'x * (x + x)',
//     'x * x * x',
//     'x + x * x',
//     '(x + x) * x',
//     'x + x + x'
//   ];

//   const values = [a, b, c];

//   return expressions
//     .map(x => {
//       values.map(value => (x = x.replace(/x/, value)));
//       return eval(x);
//     })
//     .sort((a, b) => a - b)
//     .pop();
// }

// function expressionMatter(a, b, c) {
//   let top = 0;

//   const expressions = [
//     'x * (x + x)',
//     'x * x * x',
//     'x + x * x',
//     '(x + x) * x',
//     'x + x + x'
//   ];

//   let values = [a, b, c];

//   for (let i = 0; i < expressions.length; i++) {
//     let current = expressions[i];

//     for (let j = 0; j < values.length; j++) {
//       current = current.replace(/x/, values[j]);
//     }

//     top = top < eval(current) ? eval(current) : top;
//   }

//   return top;
// }

module.exports = expressionMatter;
