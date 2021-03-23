'use strict';
/*
console.log((document.querySelector('.message').textContent = 'Guess Mar...'));
console.log(document.querySelector('.guess').value);
console.log((document.querySelector('.guess').value = 15));

let message = document.querySelector('.message');
//message.textContent = 'Guess karo!!!';
console.log(message.textContent);
*/
//defining prototypes----------------------------------------------------
let message = document.querySelector('.message'); //message tab
let check = document.querySelector('.check'); //check button
let guess = document.querySelector('.guess'); //guessin the number(guessbox)
let score = document.querySelector('.score'); //calculating the score
let highscore = document.querySelector('.highscore'); //Displaying the high score
let again = document.querySelector('.again');
let number = document.querySelector('.number'); //hidden number

//creating random number to guess-----------------------------------------
let secNumber = Math.trunc(Math.random() * 20 + 1);

//CHECK BUTTON IMPLEMENTATION------------------------------------------------
check.addEventListener('click', function () {
  const check = Number(guess.value);
  console.log(typeof guess.value);
  if (score.textContent > 0) {
    if (!check) {
      message.textContent = `No Number⛔!!!`;
    } else if (check === secNumber) {
      document.querySelector('body').style.backgroundColor = 'green';
      message.textContent = `🎊Correct Number!!!!!🎊`;
      number.textContent = secNumber;
      while (highscore.textContent < score.textContent) {
        highscore.textContent = score.textContent;
      }
    } else if (check !== secNumber) {
      message.textContent = check > secNumber ? `📈Too High!!` : `📉Too Low!!`;
      score.textContent--;
    }
  } else {
    document.querySelector('body').style.backgroundColor = 'red';
    message.textContent = 'You Have Lost 🚩.';
    number.textContent = secNumber;
  }
});
//AGAIN BUTTON IMPLEMENTATION-------------------------------------------------
again.addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  number.textContent = '?';
  secNumber = Math.trunc(Math.random() * 20 + 1);
  score.textContent = 10;
  console.log(score.textContent);
  message.textContent = 'Start guessing...';
});
