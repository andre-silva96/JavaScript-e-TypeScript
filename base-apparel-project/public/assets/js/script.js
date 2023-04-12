"use strict";
let inputEmail = document.querySelector('#input-email');
let inputButton = document.querySelector('#input-button');
let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let messageError = document.querySelector('.span-error-message');
let imageError = document.querySelector('.error');
let form = document.getElementsByTagName('form');
function validateForm() {
    validateEmail();
    return false;
}
function validateEmail() {
    if (inputEmail.value !== regex) {
        messageError.style.display = 'block';
        imageError.style.display = 'block';
    }
    else if (inputEmail.value === regex) {
        alert('200 - OK');
    }
}
