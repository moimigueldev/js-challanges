// check to see if there are dups in a given str and return the unique number of dups

function duplicateCount(text) {
    let arr = text.split('');
    let countarr = [];
    let counts = {}
    // arr.some((item) => arr.indexOf(item) !== arr.lastIndexOf(item)? null: countarr.push(item))

    arr.some( (item) => {
        if (arr.indexOf(item) !== arr.lastIndexOf(item)) { // find all of the dups in the arr
            countarr.push(item)
        }
    });
    
    countarr.forEach((x) =>  counts[x] = (counts[x] || 0)+1);
    return Object.keys(counts).length;

    // return new Set(text.split('')).size !== text.length 
}

module.exports = duplicateCount;