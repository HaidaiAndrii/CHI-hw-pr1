'use strict';

const buttonSendForm = document.getElementById('submit');
const inputName = document.getElementById('login');
const inputPassword = document.getElementById('password');

const loginSpan = document.getElementById('loginError');
const passSpan = document.getElementById('passError');
const selectSpan = document.getElementById('selectError');


const passSection = document.querySelector('.pass');
const loginSection = document.querySelector('.login');
const optionCountry = document.getElementById('select');
const checkBoxAccept = document.getElementById('agreement');
const eye = document.getElementById('eye');
const form = document.querySelector('.form');

form.addEventListener('click', () => {
    if (inputName.value.length >= 2 && inputPassword.value.length > 6 && optionCountry.value !== 'country' && checkBoxAccept.checked) {
        buttonSendForm.classList.remove('buttonDisabled');
    }
})

eye.addEventListener('click', () => {
    if (inputPassword.type === 'text') {
        inputPassword.type = 'password';
        eye.style.backgroundImage = "url('../img/eye.svg')";
    } else {
        inputPassword.type = 'text';
        eye.style.backgroundImage = "url('../img/closedeye.svg')";
    }
})

checkBoxAccept.addEventListener('click', () => {
    // buttonSendForm.disabled = !buttonSendForm.disabled;
    buttonSendForm.disabled = false;
})


const addClassError = (input, element) => {
    input.classList.add('error');
    element.classList.remove('hideError');
    buttonSendForm.classList.add('buttonDisabled');
};

const removeClassError = (input, element) => {
    input.classList.remove('error');
    element.classList.add('hideError');
};



const checkName = (login) => {
    if (login.value === '') {
        addClassError(loginSection, loginSpan);
    } else if (login.value.length >= 2) {
        removeClassError(loginSection, loginSpan);

    }
};

const checkPassword = (password) => {
    if (password.value.length <= 6) {
        addClassError(passSection, passSpan);
    } else if (password.value.length > 6) {
        removeClassError(passSection, passSpan);
    }
};

const checkCountrySelect = () => {
    if (optionCountry.value === 'country') {
        addClassError(optionCountry, selectSpan);
    } else {
        removeClassError(optionCountry, selectSpan);
    }
}

buttonSendForm.addEventListener('click', () => {
    checkName(inputName);
    checkPassword(inputPassword);
    checkCountrySelect();
});