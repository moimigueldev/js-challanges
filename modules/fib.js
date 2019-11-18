// Fibonacci number (Fibonacci sequence), named after mathematician Fibonacci, 
// is a sequence of numbers that looks like this:
// 0, 1, 1, 2, 3, 5, 8, 11,...
// You get first two starting numbers, 0 and 1, 
// and the next number in the sequence is always the sum of the previous two numbers. Fibonacci introduced it 
// in 1202, in his book Liber Abaci.
// So what will be your task? You should write a
// function fib, that takes one parameter steps, and returns a number from the Fibonacci sequence,
// based on the parameter steps, which determines the position in Fibonacci number.
// For example fib(0) returns 0, fib(4) returns 3, fib(15) returns 610.
var stack = {};
function fib(n){
  if (n>1)
    return stack[n] || ( stack[n] = fib(n-1)+fib(n-2) );
  return n;

  }

module.exports = fib;