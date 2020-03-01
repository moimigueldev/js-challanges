// Story
// Carol's boss Bob thinks he is very smart. He says he made an app which renders messages unreadable without changing any letters, 
// only by adding some new ones, while preserving message integrity (i. e. the original message can still be retrieved).

// He gave some limited access to his app to Carol to challenge her, and hinted that if Carol cannot crack this simple task, she might be fired.

// Carol was trying to crack this code herself, but got too tired, so she came to you for help. 
// However, she succeeded to hack Bob's app and found a data field called 'marker'. She thinks it can be helpful for cracking Bob's app.

// Help Carol keep her job!

// Function features
// Arguments
// encoded - the encoded string which we are trying to revert to its original form.
// marker - a short string used in the encoding process somehow.
// Expected value
// Your function must decode and return the original string.

// describe("Sample test", function () {
//     it("Should work", function () {
//         assert.equal(decoder("Lor-.tile gnicsipida rutetcesnoc ,tema tis rolod muspi me", '-'),
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
//     });
// });

// Suspendisse potenti. Fusce finibus mollis nisl nec venenatis.


function decoder(encoded, marker) {
    let [a, b] = encoded.split(marker).reduce((ll, w, i) => ll[i & 1].push(w) && ll, [[], []]);
    return [...a, ...[...b.join('')].reverse()].join('')

}


// function decoder(encoded, marker) {
//     let str1 = encoded.substring(0, encoded.indexOf(marker))
//     let str2 = encoded.substring(encoded.indexOf(marker) + 1).split(' ').reverse().map(el => {
//         return el.split('').reverse().join('')
//     }).join(' ')
//     // console.log('marker', str1)
//     // console.log('marker', str2)

//     return `${str1}${str2}`
// }

module.exports = decoder;