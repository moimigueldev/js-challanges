// check to see if there are dups in a given str and return the unique number of dups

function duplicateCount(text) {
    let arr = text.toLowerCase().split('');
    let countarr = [];
    let counts = {}

    


    arr.some( (item) => {
        if (arr.indexOf(item) !== arr.lastIndexOf(item)) { // find all of the dups in the arr
            countarr.push(item)
        }
    });
    
    countarr.forEach((x) =>  counts[x] = (counts[x] || 0)+1);
    console.log(counts)
    return Object.keys(counts).length;

    // return new Set(text.split('')).size !== text.length 
}

// ALTERNATIVE
// return text.toLowerCase().split('').filter(function(val, i, arr){
//     return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
//   }).length;

module.exports = duplicateCount;