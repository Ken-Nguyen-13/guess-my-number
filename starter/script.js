'use strict';

// document.querySelector('.guess').value = Math.ceil(Math.random() * 20);
let mysteryNum = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

//Reset Button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  mysteryNum = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = `Start Guessing!`;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = ``;
  document.querySelector('body').style.backgroundColor = `#222`;
  document.querySelector('.number').style.width = `15rem`;
  document.querySelector('.number').textContent = `?`;
  document.querySelector('h1').textContent = `Guess My Number!`;
});

//Checking the Number
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //Code for message and score
  if (
    document.querySelector('.message').textContent !== `✅ Correct Number!` &&
    document.querySelector('.message').textContent !== `You Lost.`
  ) {
    if (!guess || 1 > guess || guess > 20) {
      //invalid Number
      document.querySelector(`.message`).textContent = `⛔ Invalid Number!`
    } else if (guess === mysteryNum) {
      //Correct Number
      document.querySelector('.message').textContent = `✅ Correct Number!`;
      document.querySelector('body').style.backgroundColor = `#46c63b`;
      document.querySelector('#game-title').textContent = `You Guessed My Number!`;
      document.querySelector('.number').style.width = `30rem`;
      document.querySelector('.number').textContent = mysteryNum;
      if (highscore < score) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (score > 1) {
      if (guess > mysteryNum) {
        //Too High
        score--;
        document.querySelector('.message').textContent = `Too High!`;
        document.querySelector('.score').textContent = score;
      } else if (guess < mysteryNum) {
        //Too low
        score--;
        document.querySelector('.message').textContent = `Too Low!`;
        document.querySelector('.score').textContent = score;
      }
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = `You Lost.`;
    }
  }
});
