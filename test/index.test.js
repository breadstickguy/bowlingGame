const Game = require('../index.js');

describe('Testing suite', () => {
    it('should run tests properly', () =>{
        expect(true).toBe(true);
    });
});

describe('Bowling Library - index.js', () => {
    describe('Game object', () => {
        // beforeEach(() => {
        //     const game = new Game();
        //     return game;
        // });
         it('Bowling factory should return an object', () => {
            const game = new Game();
            expect(typeof game).toBe('object');
        });
        it('should have a frames property, which is an array', () => {
            const game = new Game();
            expect(game.frames).toEqual(expect.arrayContaining([]));
        });
        
        

    });
    describe('addFrame', () => {
        it('should properly add frames to the array', () => {
            const game = new Game();
            game.addFrame(4,4);
            expect(game.frames.length).toEqual(1);
        });
        it('should prevent more than 10 pins from being scored per frame', () => {
            const game = new Game();
            expect(() => game.addFrame(6,6)).toThrow();
        });
        it('should require two rolls to be passed in', () => {
            const game = new Game();
            expect(() => game.addFrame(6)).toThrow();
        });
        it('should not accept more than 10 frames', () => {
            const game = new Game();
            game.frames = [1,2,3,4,5,6,7,8,9,0];
            expect(() => game.addFrame(4,4)).toThrow();
        });
        it('should only accept numbers, X or /', () => {
            const game = new Game();
            expect(() => game.addFrame('bacon')).toThrow();
        });
    });
});