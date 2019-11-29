// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// '  #  '
// ' ###  '

function pyramid(n) {
    let string = ' '.repeat(n *  2 - 1)
    const midpoint = Math.floor((2 * n - 1) / 2);

    
    string = string.substr(0, midpoint) + '#' + string.substr(midpoint + 1);

    while (n > 0) {
        console.log(string)
          if (string[string.length  -1 ] !== '#') {
            let current = string.substr(0, string.indexOf('#')).split('');
            current[current.length -1 ] = '#'
            string = current.join('') + string.substr(string.indexOf('#'))
    
    
            let endCurrent =  string.substr(string.lastIndexOf('#') + 1).split('')
            endCurrent[0] = '#'
            string = string.substr(0, string.lastIndexOf('#') + 1) + endCurrent.join('')
          }
        n--;
    }


}

module.exports = pyramid;
