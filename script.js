'use strict';

// console.log( document.querySelector('.message')
// .textContent);

// document.querySelector('.message').textContent = '🎉correct Nmber!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let heighscore = 0; 

document.querySelector('.check').addEventListener('click',function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = '🚫 No Nmber!';
    }else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉correct Nmber!';
        document.querySelector('.number').textContent = secretNumber;


        document.querySelector('body').style.backgroundColor ='#60b347';

        document.querySelector('.number').style.width = '30rem';

        if (score > heighscore) {
            heighscore = score;
            document.querySelector('.heighscore').textContent = heighscore;
        }


        // when guess is too heigh
    }else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📈too heigh!';
        score--;
        document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'you lose the game';
        }
        
    }
    else if (guess < secretNumber) {
        document.querySelector('.message').textContent = '📉too low!';
        score--;
        document.querySelector('.score').textContent = score;
    }
});

document.querySelector('.again').addEventListener('click',function() {

    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;

    document.querySelector('.message').textContent = 'Start guessing';
    document.querySelector('.score').textContent = 'score';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';


    document.querySelector('body').style.backgroundColor ='#222';

        document.querySelector('.number').style.width = '15rem';
});


