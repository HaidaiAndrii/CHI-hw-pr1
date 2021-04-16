'use strict';

const inputName = document.querySelector('.js-input-login');
const buttonSendForm = document.querySelector('.form__submit');
const inputPassword = document.querySelector('.js-input-pass');
const passSection = document.querySelector('.pass');
const loginSection = document.querySelector('.login');
const formInputSection = document.querySelector('.js-formPart-listener');
const loginSpan = document.querySelector('.js-login-error');
const passSpan = document.querySelector('.js-pass-error');
const selectSpan = document.querySelector('.js-select-error');
const optionCountry = document.querySelector('.form__inputSection-select');
const checkBoxAccept = document.querySelector('.checkbox');
const eye = document.querySelector('.form__eyeIcon');
const select = document.querySelector('.form__select');
const form = document.querySelector('.form');

let isNameValidated = false;
let isPassValidated = false;
let isSelectValidated = false;


eye.addEventListener('click', () => {

    if (inputPassword.type === 'text') {
        inputPassword.type = 'password';
        eye.style.backgroundImage = "url('../src/img/eye.svg')";
    } else {
        inputPassword.type = 'text';
        eye.style.backgroundImage = "url('../src/img/closedeye.svg')";
    }
});

checkBoxAccept.addEventListener('click', () => {
    buttonSendForm.disabled = !checkBoxAccept.checked;
})


const addClassError = (input, element) => {
    input.classList.add('error');
    element.classList.remove('hideError');
    buttonSendForm.disabled = true;

};

const removeClassError = (input, element) => {
    input.classList.remove('error');
    element.classList.add('hideError');
};

const checkName = (login) => {
    if (login.value === '') {
        addClassError(loginSection, loginSpan);
        isNameValidated = false;
    } else {
        isNameValidated = true;
        removeClassError(loginSection, loginSpan);
    }
};

const checkPassword = (password) => {
    if (password.value.trim().length === 0) {
        isPassValidated = false;
        addClassError(passSection, passSpan);
    } else {
        isPassValidated = true;
        removeClassError(passSection, passSpan);
    }
};

const checkCountrySelect = () => {
    if (select.value === 'country') {
        isSelectValidated = false;
        addClassError(optionCountry, selectSpan);
    } else {
        isSelectValidated = true;
        removeClassError(optionCountry, selectSpan);
    }
}


formInputSection.addEventListener('change', () => {
    if (checkBoxAccept.checked) {
        buttonSendForm.disabled = false;
    }
    if (checkBoxAccept.checked) {
        checkName(inputName);
        checkPassword(inputPassword);
        checkCountrySelect();
    }
})


form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkName(inputName);
    checkPassword(inputPassword);
    checkCountrySelect();

    if (isNameValidated && isPassValidated && isSelectValidated && checkBoxAccept.checked) {
        alert('Succes');
        console.log(select.value)
        inputName.value = '';
        inputPassword.value = '';
        select.value = 'country';
        checkBoxAccept.checked = false;
        buttonSendForm.disabled = true;
    }
})



function validationLogin() {
    this.value = this.value.replace(/\s+/g, ' ');
    this.value = this.value.replace(/[^a-zA-Zа-яА-ЯЁёІі\s0-9`]/g, '');
}

function validationPassword() {
    this.value = this.value.trim().replace(/\s+/g, '');
}

inputName.addEventListener('input', validationLogin);
inputPassword.addEventListener('input', validationPassword);