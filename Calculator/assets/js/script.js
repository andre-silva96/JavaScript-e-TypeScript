function calcNumber(n) {
    let displayTop = document.querySelector('.display-top');
    displayTop.innerHTML += n;
}

function cleanDisplay() {
    document.querySelector('.display-top').innerHTML = '';
    document.querySelector('.display-bottom').innerHTML = 0;
}

function backspace() {
    let displayTop = document.querySelector('.display-top').innerHTML;
    document.querySelector('.display-top').innerHTML = displayTop.substring(0, displayTop.length -1);
}

function addNumbers() {
    let displayTop = document.querySelector('.display-top').innerHTML;

    let displayBottom = document.querySelector('.display-bottom');

    if(displayTop) {
        displayBottom.innerHTML = eval(displayTop);
    } else {
        alert('Insira um número no campo!');
        displayBottom.innerHTML = '';
    }
}