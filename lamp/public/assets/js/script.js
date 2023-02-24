"use strict";
let button = document.querySelector('.button');
button.addEventListener('click', () => {
    let button = document.querySelector('.button');
    let lampImg = document.querySelector('#lamp-img');
    if (button.value === 'Ligar') {
        lampImg.setAttribute('src', 'assets/img/lamp-on.png');
        lampImg.setAttribute('alt', 'Lâmpada ligada');
        document.body.style.backgroundColor = '#000';
        button.value = 'Desligar';
    }
    else if (button.value === 'Desligar') {
        lampImg.setAttribute('src', 'assets/img/lamp-off.png');
        lampImg.setAttribute('alt', 'Lâmpada desligada');
        document.body.style.backgroundColor = '#fff';
        button.value = 'Ligar';
    }
});
