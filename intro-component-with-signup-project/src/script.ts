const regex: RegExp = /\S+@\S+\.\S+/;
let button: any = document.querySelector('#button');
let iconError: any = document.querySelectorAll('.icon-error');
let messageError: any = document.querySelectorAll('.error-message');
let inputs: any[] = [
    document.querySelector('#input-first-name'),
    document.querySelector('#input-last-name'),
    document.querySelector('#input-email'),
    document.querySelector('#input-password')
];

function validateForm(): any {
    validateInputs();
    return false;
}

function validateInputs(): void {
    validadeInputFirstName();
    validateInputLastName();
    validateInputEmail();
    validateInputPassword();
}

function validadeInputFirstName() {
    if(inputs[0].value == '') {
        addError();
        return false;
    } else {
        removeError();
        return true;
    } 
}

function validateInputLastName() {
    if(inputs[1].value == '') {
        addError();
        return false;
    } else {
        removeError();
        return true;
    }
}

function validateInputEmail() {
    if(inputs[2].value == '' || inputs[2].value != regex) {
        addError();
        return false;
    } else {
        removeError();
        return true;
    }
}

function validateInputPassword() {
    if(inputs[3].value == '') {
        addError();
        return false;
    } else {
        removeError();
        return true;
    }
}

function addError(): any {
    if(inputs[0].value == '') {
        iconError[0].style.display = 'block';
        messageError[0].style.display = 'block';
        inputs[0].classList.add('border-error');
    }
    if (inputs[1].value == '') {
        iconError[1].style.display = 'block';
        messageError[1].style.display = 'block';
        inputs[1].classList.add('border-error');
    }
    if(inputs[2].value == '') {
        iconError[2].style.display = 'block';
        messageError[2].style.display = 'block';
        inputs[2].classList.add('border-error');
    }
    if(inputs[3].value == '') {
        iconError[3].style.display = 'block';
        messageError[3].style.display = 'block';
        inputs[3].classList.add('border-error');
    }
}

function removeError(): void {
    if(inputs[0].value != '') {
        iconError[0].style.display = 'none';
        messageError[0].style.display = 'none';
        inputs[0].classList.remove('border-error');
    }
    if (inputs[1].value != '') {
        iconError[1].style.display = 'none';
        messageError[1].style.display = 'none';
        inputs[1].classList.remove('border-error');
    }
    if (inputs[2].value != '') {
        iconError[2].style.display = 'none';
        messageError[2].style.display = 'none';
        inputs[2].classList.remove('border-error');
    }
    if (inputs[3].value != '') {
        iconError[3].style.display = 'none';
        messageError[3].style.display = 'none';
        inputs[3].classList.remove('border-error');
    }
}