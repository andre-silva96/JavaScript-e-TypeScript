let input = document.querySelectorAll('input');
let warning = document.querySelectorAll('.span');
let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let button = document.querySelector('#input-button');
let form = document.querySelector('form');

function validateName() {
    if(input[0].value.length < 3) {
        warning[0].style.display = 'block';
    } else {
        warning[0].style.display = 'none';
    }
}

function validateEmail() {
    if(!regex.test(input[1].value)) {
        warning[1].style.display = 'block';
    } else {
        warning[1].style.display = 'none';
    }
}

function validatePassword() {
    if(input[2].value.length < 8) {
        warning[2].style.display = 'block';
    } else {
        warning[2].style.display = 'none';
    }
}

function confirmPassword() {
    if(input[3].value.length < 8 || input[3].value != input[2].value) {
        warning[3].style.display = 'block';
    } else {
        warning[3].style.display = 'none';
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(input[1].value.length == 0) {
        for(let i = 0; i <= input.length; i++) {
            warning[i].style.display = 'block';
        }
    } else {
        warning[i].style.display = 'none'
    }
});