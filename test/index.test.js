const Game = require('../index.js');

describe('Testing suite', () => {
    it('should run tests properly', () =>{
        expect(true).toBe(true);
    });
});

describe('Bowling Library - index.js', () => {
    describe('Game object', () => {
        beforeEach(() => {
           game = new Game();
        });
        it('Bowling factory should return an object', () => {
            expect(typeof game).toBe('object');
        });
        it('should have a frames property, which is an array', () => {
            expect(game.frames).toEqual(expect.arrayContaining([]));
        });
        
        
        
    });
    describe('addFrame', () => {
        beforeEach(() => {
            game = new Game();
        });
        it('should properly add frames to the array', () => {
            game.addFrame(4,4);
            expect(game.frames.length).toEqual(1);
        });
        it('should prevent more than 10 pins from being scored per frame', () => {
            expect(() => game.addFrame(6,6).toThrowError(new Error(`You can't have more than 10 pins in a frame!`)));
            expect(game.frames.length).toEqual(0);
        });
        it('should require two rolls to be passed in', () => {
            expect(() => game.addFrame(6)).toThrowError(new Error(`You must include two rolls!`));
            expect(game.frames.length).toEqual(0);
        });
        it('should not accept more than 10 frames', () => {
            game.frames = [1,2,3,4,5,6,7,8,9,0];
            expect(() => game.addFrame(4,4)).toThrowError(new Error(`You can't have more than 10 frames`));
        });
        it('should call for the bonus frame on the 10th frame', () => {
            game.frames = [1,2,3,4,5,6,7,8,9];
            game.addFrame(3,7,9);
            expect(game.frames[9]).toEqual(expect.arrayContaining([3,7,9]));
            expect(game.frames.length === 10);
        });

    });
    describe('pinChecker', () => {
        beforeEach(() => {
            game = new Game();
        });
        it(`should only accept numbers, 'X' or '/'`, () => {
            expect(game.pinChecker(6)).toBe(true);
            expect(game.pinChecker(67)).toBe(false);
            expect(game.pinChecker('X')).toBe(true);
            expect(game.pinChecker('/')).toBe(true);
            expect(game.pinChecker('bacon')).toBe(false);
        });

    });
});