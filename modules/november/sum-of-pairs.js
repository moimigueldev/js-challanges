var sum_pairs=function(ints, s, arr = []){
    var seen = {}
  for (var i = 0; i < ints.length; ++i) {
    //   console.log(seen)
      console.log([s - ints[i], ints[i]])
    if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
    seen[ints[i]] = true
  }
}



console.log(sum_pairs([1,4,8,7,3,15], 8))
// console.log(sum_pairs([11, 3, 7, 6], 10))

// console.log(sum_pairs([0, 0, -2, 3], 2))

// console.log(sum_pairs([10, 5, 2, 3, 7, 5],10))

// console.log(sum_pairs(Array(10000).fill(0, 1, 10000),10))


// console.log(Array(10000).fill(0, 1, 10000))

module.exports = sum_pairs;