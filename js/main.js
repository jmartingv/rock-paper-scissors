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

// Get elements from HTML
const choiceBtns = document.querySelectorAll('.choice');
const pScore = document.querySelector('#pScore');
const cScore = document.querySelector('#cScore');

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
// function userPlay() {
//   userPick = prompt('Rock, paper or scissors?');

//   return userPick.trim().toLowerCase();
// }
choiceBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    playRound(btn.value, computerPlay());
  });
});

/* Play round */
function playRound(userSel, comSel) {
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
  pScore.textContent = `${userWins}`;
  cScore.textContent = `${comWins}`;
}
