// Complete the function that takes 3 numbers x, y and k (where x ≤ y), 
// and returns the number of integers within the range [x..y] (both ends included) that are divisible by k.
// More scientifically: { i : x ≤ i ≤ y, i mod k = 0 }
// Example
// Given x = 6, y = 11, k = 2 the function should return 3, because 
// there are three numbers divisible by 2 between 6 and 11: 6, 8, 10

function divisibleCount(x, y, k) {

   let arr = add(x, y)
   
   console.log('arr', arr)

//     let arr = Array((y -x + 1 )).fill(add(x, y), 0, (y-x) + 1);

//    console.log(arr)

 }

 function  add(x, y, arr = []) {
     let count = x;
     arr.push(x)
     
     console.log('current', count);

     if (count === y ) {
         return arr;
     } else {
        //  console.log('arr', arr)
        //  arr.push(x)
         return add(x += 1, y, arr)
     }
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