/** Rock - Paper - Scissors game
 * Steps:
 * Define the possible choices
 * Make COM choose
 * Make User choose
 * Play round:
 * Compare both choices
 * Decide winner
 * Increase counters
 */

/* Initialize variables */
let computerPick;
let userPick;

let comWins = 0;
let userWins = 0;

/* Define possible choices */
let choices = ['rock', 'paper', 'scissors'];

/* Make COM choose */
function computerPlay() {
  /* Pick a random number between 0 and the choices' array length, to use as index for the random choice */
  let randomIndex = Math.floor(Math.random() * choices.length);

  computerPick = choices[randomIndex];

  return computerPick;
}

/* Make User choose */
function userPlay() {
  userPick = prompt('Rock, paper or scissors?');

  return userPick.trim().toLowerCase();
}

/* Play round */
function playRound() {
  let comSel = computerPlay();
  let userSel = userPlay();

  console.log(`Computer picks ${comSel}`);
  console.log(`User picks ${userSel}`);

  /* Compare both choices */
  switch (userSel) {
    /* User picks rock */
    case 'rock':
      /* Declare winner */
      if (comSel === 'paper') {
        console.log('Computer wins!');
        comWins++;
        break;
      } else if (comSel === 'rock') {
        console.log("It's a tie!");
        break;
      } else {
        console.log('User wins!');
        userWins++;
        break;
      }

    /* User picks paper */
    case 'paper':
      /* Declare winner */
      if (comSel === 'scissors') {
        console.log('Computer wins!');
        comWins++;
        break;
      } else if (comSel === 'paper') {
        console.log("It's a tie!");
        break;
      } else {
        console.log('User wins!');
        userWins++;
        break;
      }

    /* User picks scissors */
    case 'scissors':
      /* Declare winner */
      if (comSel === 'rock') {
        console.log('Computer wins!');
        comWins++;
        break;
      } else if (comSel === 'scissors') {
        console.log("It's a tie!");
        break;
      } else {
        console.log('User wins!');
        userWins++;
        break;
      }
  }
  console.log(`Score: COM: ${comWins} - User: ${userWins}`);
}

/* Repeat for 5 rounds */
function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }

  if (userWins > comWins) {
    console.log('User wins the game!');
  } else if (userWins == comWins) {
    console.log("It's a tie!");
  } else {
    console.log('Computer wins the game!');
  }
}

game();
