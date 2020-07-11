//Game keeps score based on frame entries
//Must keep frame data
//Must allow for incomplete games
//Must correctly keep score
/* 
 * Frames --
 * Should be an array
 * Cannot contain more than two rolls, with one exception
 * Single exception is the 10th frame
 * Should only contain numbers, / or X as scores
 * The 10th frame allows for up to 3 rolls if a strike or spare is recorded. 
 * If a spare is recorded in the 10th frame, 1 bonus roll is added
 * If a strike is recorded in the 10th frame, 2 bonus rolls are added for a maximum of 3.
 */

/*
 * Scoring
 * Each pin is worth 1 point
 * If you score 10 points in a frame with two throws, you score a spare or '/'
 * Spares are scored as follows - 10 Points for the frame + the score of the next roll
 * If you score 10 points in a single throw, you score a strike or 'X'
 * Strikes are scored as follows - 10 points + the next two rolls
 */

class Game {
    constructor() {
        this.frames = [];
        
    }
}

const myFunc = () => foo;

Game.prototype.addFrame = function(a, b, c) {
    if(a + b > 10) {
        throw new Error(`You can't have more than 10 pins in a frame!`);
    }
    if(a === undefined || b === undefined) {
        throw new Error(`You must include two rolls!`); 
    }
    if(this.frames.length === 10) {
        throw new Error(`You can't have more than 10 frames`);
    }
    if(this.frames.length === 9) {
        this.addTenthFrame(a, b, c);
    }
    if(this.pinChecker(a, b)){
        this.frames.push([a,b]);
    }
}

Game.prototype.addTenthFrame = function(a, b, c) {
    if(this.pinChecker(a, b, c)){
        this.frames.push([a, b, c]);
    }
}

Game.prototype.pinChecker = function(pin) {
    return !!pin.toString().match(/\b[0-9]\b|[X]|\//);
}

module.exports = Game;
