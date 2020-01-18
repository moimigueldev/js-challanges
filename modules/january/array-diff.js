// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// array_diff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// array_diff([1,2,2,2,3],[2]) == [1,3]


function array_diff(a, b) {

    if (!a.length) return [];
    if(!b.length) return a
   

    b.forEach(el => {
        const reg = new RegExp(el, 'g')
        a = a.join('').replace(reg, '')
    });



   
    console.log('final', a.split('').map(Number))
    

//   console.log(a.join('').replace(/2/g, '').split('').map(Number))
}

module.exports = array_diff;