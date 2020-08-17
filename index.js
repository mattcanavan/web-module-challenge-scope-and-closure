// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * A. In the former, variable count is defined inside the function. In the latter, the variable count is defined outside of the function.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * A. counter1 uses closure. We can see that there's a nested function that references the variable count in an inner-function when in-fact count is defined in an outside-funciton.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * counter1 is preferable where we'll be calling the function many times and want a "fresh start" for the count variable at each iteration. counter2 would be perferable if we wanted each function call to share the same variable count value.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

  let score = 0;
  score = Math.floor(Math.random() * 3); // Math.floor returns largest int equal-to or less than a given number. Math.random values are between [0, 1)
  return score;
}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(paramFunction, inningNumber){
  const scoreObject = {};
  scoreObject.home = 0;
  scoreObject.away = 0;

  for (i = 1; i <= inningNumber; i++){
    scoreObject.home += inning();
    scoreObject.away += inning();
  }
  return scoreObject;
}

console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreboard(paramScoringFunction, numberOfInnings) {
  for (i = 1; i <= numberOfInnings; i++){
    if (i === 1){
      let name = 'st';    //1st
    }else if (i === 2){ 
      let name = 'nd';    //2nd
    }else if (i == 3){
      let name = 'rd';    //3rd
    } else {
      let name = 'th';
    }

    return `${i}${name} inning: awayTeam ${objectScore.away} - homeTeam ${objectScore.home}`; 

  }
}


