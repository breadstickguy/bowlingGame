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