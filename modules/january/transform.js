// Let us consider, as an example, strings like the following:

// s='"Title"
// Date class
// .
// .
// "Connected"
// fifo,
// isoYear,
// daynum,
// argfirst,
// monthend,
// weeknum,
// assoc.quantity,
// yearstart,
// rank,
// today.'
// or:
// s="\"Title\"\nDate class \n.\n.\n\"Connected\"\nfifo, \nisoYear, \ndaynum, \nargfirst, \nmonthend, \nweeknum, \nassoc.quantity, \nyearstart, \nrank, \ntoday."

// We want to transform s into the following string t:

// t='"Title"
// Date class
// .
// .
// "Connected"
//  1 argfirst
//  2 assoc.quantity
//  3 daynum
//  4 fifo
//  5 isoYear
//  6 monthend
//  7 rank
//  8 today
//  9 weeknum
// 10 yearstart.
// or:
// t="\"Title\"\nDate class \n.\n.\n\"Connected\"\n 1 argfirst\n 2 assoc.quantity\n 3 daynum\n 4 fifo\n 5 isoYear\n 6 monthend\n 7 rank\n 8 today\n 9 weeknum\n10 yearstart."

// t has two parts. The only difference between s and t is that in t all substrings following "Connected" are in alphabetical order, each on its own line, without duplicates and preceded by their ranks in the second part of t (these numbers are in a field of two, right aligned, followed by a space).

// Task
// Let us call trans the function with parameter s which transforms s into t. The parameter s will always be a string including the substring "Connected". What you have to do to get t is to reproduce the first part of s, keep "Connected", get the substrings of the second part of s in

// alphabetical order,
// each on its own line,
// without duplicates
// and preceded by their ranks in the second part of t.


function transform(s) {
    const split = s.split('\n')
    // const first = s.indexOf('"Connected"')

    let first = ''
    let last = []
    let reachedConnected = false

    split.forEach((el, index) => {
        if (el === '"Connected"') {
            first += `${el}\n`
            reachedConnected = true
        } 
        else if (!reachedConnected) {
            first += `${el}\n`
        }
        else {
            last.push(`${el}\n`)
        }
    });
    last = last.sort()
    last[last.length -1] = `${last[last.length - 1].split(',')[0]}.`

    last = last.map((el, index) => {
        return  `${index + 1} ${el}`
    }).join('')
    

    console.log(last)
    // console.log(last[last.length - 1].split(','))
}

module.exports = transform;