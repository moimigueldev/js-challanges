const vowelsBack = require('../../modules/december/vowels-back');

// Test.assertSimilar(vowelBack("testcase"), "tabtbvba");

describe('Encrypt String', () => {
    it("Should Encrypt String", () => {
        const result = vowelsBack('testcase')
        expect(result).toEqual('tabtbvba')
    })
})

