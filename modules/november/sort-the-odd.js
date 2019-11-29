// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Example

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

function sortArray(array) {

    let indices = [];

   array.filter((item, i) => item % 2 && indices.push(i))
   .sort((a, b) => a-b)
   .forEach((item, i) => array[indices[i]] = item )

   return array;
  
}

module.exports = sortArray;