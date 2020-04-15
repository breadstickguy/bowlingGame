const sum = require('../index.js');
describe('Testing suite', () => {
    it('should run tests properly', () =>{
        expect(true).toBe(true);
    });
});

describe('Bowling Library', () => {
    describe('main file - index.js', () => {
        describe('sum', () => {
            it('should add two numbers together', () => {
                expect(sum(2,4)).toBe(6);
            });
        });
        // it('should have a game object', () => {

        // })
        

    });
});