// Create a moreZeros function which will receive a string for input, and return an array containing 
// only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.

// You should remove any duplicate characters, keeping the first occurence of any 
// such duplicates, so they are in the same order in the final array as they first appeared in the input string.

// Examples

// 'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
//                True       True       False      True       False

//         --> ['a','b','d']

// 'DIGEST'--> ['D','I','E','T']

function moreZeros(s) {
    s = [... new Set(s)].join('')
    const result = []


    s.split('').forEach((el, index) => {
        const e = s.charCodeAt(index).toString(2)
        let zeros = 0
        let ones = 0

        if (e.match(/0/g) !== null) {
            zeros = e.match(/0/g).length
        }
        if (e.match(/1/g) !== null) {
            ones = e.match(/1/g).length
        }

        zeros > ones ? result.push(el) : null
    });

    // console.log('110111'.match(/3/g))

    return result
}

module.exports = moreZeros