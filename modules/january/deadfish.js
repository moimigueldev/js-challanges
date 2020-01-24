// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

function parse(data) {
    const key = new Key();
    for (const x of data) typeof eval(`key.${x}`) !== 'undefined' ? eval(`key.${x}()`) : null
    return key.output
}

class Key {
    constructor() {
        this.value = 0;
        this.output = [];
    }
    i() { this.value += 1 }
    d() { this.value -= 1 }
    s() { this.value *= this.value }
    o() { this.output.push(this.value) }
}

module.exports = parse;
