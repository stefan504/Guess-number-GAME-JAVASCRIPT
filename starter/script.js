'use strict';

// document.querySelector('.message');
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 22;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 43;
// FUNCTIONS //
const messageDisplay = function (message) {
  document.querySelector('.message').textContent = message;
};

const scoreDisplay = function (score) {
  document.querySelector('.score').textContent = score;
};
const numberDisplay = function (number) {
  document.querySelector('.number').textContent = number;
};

// FUNCTION END //
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // WHEN THERE IS NO INPUT
  if (!guess) {
    messageDisplay('Nema broja!!');
  }

  // WHEN PLAYER WINS
  else if (guess === secretNumber) {
    messageDisplay('Tacan broj!!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    numberDisplay('30rem');
    numberDisplay(secretNumber);
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // WHEN GUESS IS WRONG
  else if (guess !== secretNumber) {
    if (score > 1) {
      messageDisplay(
        guess > secretNumber ? 'Prevelik broj!!' : 'Premali broj!!'
      );
      score--;
      scoreDisplay(score);
    } else {
      messageDisplay('IZGUBIO SI GLUPANE!!');
      scoreDisplay(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Pocni sa pogadjanjem...');
  displayScore(score);
  numberDisplay('?');
  document.querySelector('.guess').value = '';

  numberDisplay('15rem');
  document.querySelector('body').style.backgroundColor = '#222';
});
