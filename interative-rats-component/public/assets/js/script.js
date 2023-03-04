"use strict";
let score = document.querySelectorAll('.score');
let display = document.querySelector('.display-score');
let button = document.querySelector('#button-submit');
let starNumber;
function viewScore() {
    score[0].addEventListener('click', () => {
        if (score[0].getAttribute('data-score') == '1') {
            score[0].classList.add('active');
            score[1].classList.remove('active');
            score[2].classList.remove('active');
            score[3].classList.remove('active');
            score[4].classList.remove('active');
            starNumber = 1;
            returnScore(starNumber);
        }
    });
    score[1].addEventListener('click', () => {
        if (score[1].getAttribute('data-score') == '2') {
            score[1].classList.add('active');
            score[0].classList.remove('active');
            score[2].classList.remove('active');
            score[3].classList.remove('active');
            score[4].classList.remove('active');
            starNumber = 2;
            returnScore(starNumber);
        }
    });
    score[2].addEventListener('click', () => {
        if (score[2].getAttribute('data-score') == '3') {
            score[2].classList.add('active');
            score[0].classList.remove('active');
            score[1].classList.remove('active');
            score[3].classList.remove('active');
            score[4].classList.remove('active');
            starNumber = 3;
            returnScore(starNumber);
        }
    });
    score[3].addEventListener('click', () => {
        if (score[3].getAttribute('data-score') == '4') {
            score[3].classList.add('active');
            score[0].classList.remove('active');
            score[1].classList.remove('active');
            score[2].classList.remove('active');
            score[4].classList.remove('active');
            starNumber = 4;
            returnScore(starNumber);
        }
    });
    score[4].addEventListener('click', () => {
        if (score[4].getAttribute('data-score') == '5') {
            score[4].classList.add('active');
            score[0].classList.remove('active');
            score[1].classList.remove('active');
            score[2].classList.remove('active');
            score[3].classList.remove('active');
            starNumber = 5;
            returnScore(starNumber);
        }
    });
}
function switchClass(n) {
    for (let i = 0; i <= score.length; i++) {
        if (score[i].getAttribute('data-score') == n) {
            score[i].classList.add('active');
        }
    }
}
function sendScore() {
    let starScore = document.querySelector('.box-1');
    let starSection = document.querySelector('.box-2');
    starScore.style.display = 'none';
    starSection.style.display = 'block';
}
function returnScore(n) {
    const star = n;
    let p = document.createElement('p');
    p.innerHTML += `You selected ${star} out of ${score.length}`;
    display.appendChild(p);
}
