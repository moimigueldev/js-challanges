const bears = require('../../modules/december/pairs-of-bears');


describe("How many bears are mating", () => {
    it('Should be 5 bears mating and true', () => {
        expect(bears(3, '88Bifk8hB8BB8BBBB888chl8BhBfd')).toEqual(["8BB8B8B88B",true])
    })

    it("Should be 3 bears mating and false", () => {
        expect(bears(3, '88Bifk8hB8BB8BBBB888chl8BhBfd')).toEqual(["8BB8B8B88B",true])
    })
})
