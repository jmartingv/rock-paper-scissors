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
const scoreDiv = document.querySelector('#score');

const outcomeText = document.querySelector('.outcomeText');
const results = document.querySelector('.results');
const resetBtn = document.querySelector('.reset');

scoreDiv.style.visibility = 'hidden';
resetBtn.style.visibility = 'hidden';

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
choiceBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    scoreDiv.style.visibility = 'visible';
    playRound(btn.value, computerPlay());
    winCheck(userWins, comWins);
  });
});

/* Play round */
function playRound(userSel, comSel) {
  /**
   * Compare both choices
   * Replace method is used to capitalize first letter using regex */
  switch (userSel) {
    /* User picks rock */
    case 'rock':
      /* Declare winner */
      if (comSel === 'paper') {
        comWins++;

        outcomeText.textContent = `You lose! ${comSel.replace(/^\w/, (c) =>
          c.toUpperCase()
        )} (COM) beats ${userSel} (You)`;
        break;
      } else if (comSel === 'rock') {
        outcomeText.textContent = `It\'s a tie! COM picked ${comSel} too!`;
        break;
      } else {
        userWins++;
        outcomeText.textContent = `You win! ${userSel.replace(/^\w/, (c) =>
          c.toUpperCase()
        )} (You) beats ${comSel} (COM)`;
        break;
      }

    /* User picks paper */
    case 'paper':
      /* Declare winner */
      if (comSel === 'scissors') {
        comWins++;
        outcomeText.textContent = `You lose! ${comSel.replace(/^\w/, (c) =>
          c.toUpperCase()
        )} (COM) beats ${userSel} (You)`;
        break;
      } else if (comSel === 'paper') {
        outcomeText.textContent = `It\'s a tie! COM picked ${comSel} too!`;
        break;
      } else {
        userWins++;
        outcomeText.textContent = `You win! ${userSel.replace(/^\w/, (c) =>
          c.toUpperCase()
        )} (You) beats ${comSel} (COM)`;
        break;
      }

    /* User picks scissors */
    case 'scissors':
      /* Declare winner */
      if (comSel === 'rock') {
        comWins++;
        outcomeText.textContent = `You lose! ${comSel.replace(/^\w/, (c) =>
          c.toUpperCase()
        )} (COM) beats ${userSel} (You)`;
        break;
      } else if (comSel === 'scissors') {
        outcomeText.textContent = `It\'s a tie! COM picked ${comSel} too!`;
        break;
      } else {
        userWins++;
        outcomeText.textContent = `You win! ${userSel.replace(/^\w/, (c) =>
          c.toUpperCase()
        )} (You) beats ${comSel} (COM)`;
        break;
      }
  }
  pScore.textContent = `${userWins}`;
  cScore.textContent = `${comWins}`;
}

// Add event listener for reset button
resetBtn.addEventListener('click', () => {
  userWins = 0;
  comWins = 0;
  scoreDiv.style.visibility = 'hidden';
  resetBtn.style.visibility = 'hidden';
  results.textContent = '';
  outcomeText.textContent = '';
});

// Check if a player has 5 points
function winCheck(userScore, comScore) {
  if (userScore == 5 && comScore < 5) {
    results.textContent = 'Congratulations! You won!';
    resetBtn.style.visibility = 'visible';
  } else if (comScore == 5 && userScore < 5) {
    results.textContent = 'You lose! Better luck next time!';
    resetBtn.style.visibility = 'visible';
  }
}
