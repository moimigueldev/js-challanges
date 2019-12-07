const reverseString = require('../../modules/november/first-reverse');


describe('Reverse String', () => {
    xit("Shoould Reverse", () => {
        const result = reverseString('hello')

        expect(result).toEqual('olleh')
    })
})

