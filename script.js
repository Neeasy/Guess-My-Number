'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hightscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);
  //если ничего не введено
  if (!guess) {
    displayMessage('⛔ Нет числа!');
    //Если игрок выиграл
  } else if (guess === secretNumber) {
    displayMessage('🎉 Правильное число!');
    document.querySelector('body').style.backgroundColor = '#60B347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (hightscore < score) {
      hightscore = score;
      document.querySelector('.highscore').textContent = hightscore;
    }
    //Если если введено не секретное.
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '📈 Слишком высоко!' : '📉 Слишком низко!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 Ты проиграл игру!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('body').style.backgroundColor = '#A60000';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Начать угадывать...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
