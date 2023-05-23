'use strict';

// document.querySelector('.guess').value = Math.ceil(Math.random() * 20);
let mysteryNum = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = mysteryNum;

document.querySelector('.again').addEventListener('click', function () {
  mysteryNum = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = mysteryNum;
  document.querySelector('.message').textContent = `Start guessing`;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = ``;
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (document.querySelector('.message').textContent !== `✅ Correct Number!`) {
    if (guess !== mysteryNum) {
      document.querySelector('.score').textContent =
        Number(document.querySelector('.score').textContent) - 1;
    }
    if (!guess) {
      document.querySelector('.message').textContent = `⛔ No Number!`;
    } else if (guess === mysteryNum) {
      document.querySelector('.message').textContent = `✅ Correct Number!`;
      if (
        Number(document.querySelector('.score').textContent) >
        Number(document.querySelector('.highscore').textContent)
      ) {
        document.querySelector('.highscore').textContent =
          document.querySelector('.score').textContent;
      }
    } else if (guess > mysteryNum) {
      document.querySelector('.message').textContent = `Lower!`;
    } else {
      document.querySelector('.message').textContent = `Higher!`;
    }
  }
});
