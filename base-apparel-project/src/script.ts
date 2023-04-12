let inputEmail: any = document.querySelector('#input-email');
let inputButton: any = document.querySelector('#input-button');
let regex: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let messageError: any = document.querySelector('.span-error-message');
let imageError: any = document.querySelector('.error');
let form: any = document.getElementsByTagName('form');

function validateForm(): any {
    validateEmail();
    return false;
}

function validateEmail(): void {
    if(inputEmail.value !== regex) {
        messageError.style.display = 'block';
        imageError.style.display = 'block';
    } else if(inputEmail.value === regex) {
        alert('200 - OK');
    }
}
