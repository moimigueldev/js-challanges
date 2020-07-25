// https://www.codewars.com/kata/5b752a42b11814b09c00005d/train/javascript

// i) If a = 0 or b = 0, return [a, b].Otherwise, go to step(ii);
// ii) If a ≥ 2 * b, set a = a - 2 * b, and repeat step(i).Otherwise, go to step(iii);
// iii) If b ≥ 2 * a, set b = b - 2 * a, and repeat step(i).Otherwise, return [a, b].

function solve(a, b) {

    console.log(a, b)
    if (a === 0 || b === 0) {
        return [a, b]
    }

    if (a >= 2 * b) {
        a = a % (2 * b)
        return solve(a, b)
    }

    if (b >= 2 * a) {
        b = b % (2 * a)
        return solve(a, b)
    }

    return [a, b]
}

module.exports = solve;