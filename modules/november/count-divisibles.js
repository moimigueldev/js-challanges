// Complete the function that takes 3 numbers x, y and k (where x ≤ y), 
// and returns the number of integers within the range [x..y] (both ends included) that are divisible by k.
// More scientifically: { i : x ≤ i ≤ y, i mod k = 0 }
// Example
// Given x = 6, y = 11, k = 2 the function should return 3, because 
// there are three numbers divisible by 2 between 6 and 11: 6, 8, 10

function divisibleCount(x, y, k) {
    return Math.floor(y/k) - Math.floor((x-1)/k)
    
  
    
 }

 module.exports = divisibleCount;

// solution
//  function divisibleCount(x, y, k) {

    // let count = 0;

    // for (let index = x; index < y + 1; index++) {
    //     console.log(index)
    //     // if (index  % k === 0) {
    //     //     console.log('index', index);
    //     //     count++;
    //     // }
        
    // }

    // return count;
//  }


// SOLUTION
// function divisibleCount(x, y, k) {

//     let arr = add(x, y)
    
//     return arr.filter(item => {
//         return item % k === 0 ?  item : null
//     }).length;
//   }
 
//   function  add(x, y, arr = []) {
//       arr.push(x)
 
//      return x === y ? arr : add(x += 1, y, arr)
//   }

// solution
// function divisibleCount(x, y, k) {
//     x -= 1;

//    return [...Array(y - x).keys()].map(i => x += 1).filter(x => {
//        return x % k === 0 ?  x : null
//    }).length

   
// }