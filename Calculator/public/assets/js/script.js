"use strict";
function calcNumber(n) {
    let displayTop = document.querySelector('.display-top');
    displayTop.innerHTML += n;
}
function cleanDisplay() {
    let displayTop = document.querySelector('.display-top');
    let displayBottom = document.querySelector('.display-bottom');
    let numberZero = '0';
    displayTop.innerHTML = '';
    displayBottom.innerHTML = numberZero;
}
function backspace() {
    var _a;
    let displayTop = (_a = document.querySelector('.display-top')) === null || _a === void 0 ? void 0 : _a.innerHTML;
    let array = [];
    array.push(displayTop);
    console.log(array);
    displayTop.innerText = displayTop.substring(0, displayTop.length - 1);
}
function addNumbers() {
    var _a;
    let displayTop = (_a = document.querySelector('.display-top')) === null || _a === void 0 ? void 0 : _a.innerHTML;
    let displayBottom = document.querySelector('.display-bottom');
    if (displayTop) {
        displayBottom.innerHTML = eval(displayTop);
    }
    else {
        alert('Insira um número no campo!');
        displayBottom.innerHTML = '';
    }
}
