// Write a function that takes an array/list of numbers and returns a number.

// See the examples and try to guess the pattern:

// EvenOdd([1,2,6,1,6,3,1,9,6]) => 393
// EvenOdd([1,2,3]) => 5
// EvenOdd([0,2,3]) => 3
// EvenOdd([1,0,3]) => 3
// EvenOdd([3,2])   => 6

function evenOdd(arr, step = 1) {



    if (arr.length == 1) {

        return arr[0]
    }

    let a = arr.shift();
    let b = arr.shift()

    if (step === 1) {
        arr.unshift(mult(a, b))
        return evenOdd(arr, step = 2)
    } else {
        arr.unshift(add(a, b))
        return evenOdd(arr, step = 1)
    }

}

function mult(a, b) {
    return a * b
    //going to return a number
}
function add(a, b) {
    return a + b
    //going to return a number
}

module.exports = evenOdd