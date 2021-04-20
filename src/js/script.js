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
        eye.classList.remove('form__eyeIcon-not-active');
    } else {
        inputPassword.type = 'text';
        eye.classList.add('form__eyeIcon-not-active');
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

const percent = document.querySelector('.input-dash');
const dashField = document.querySelector('.dash');
const textPercent = document.querySelector('.validPercent');

percent.addEventListener('change', () => {
    let prevVal = dashField.attributes.values.nodeValue;
    let inputP = parseInt(percent.value, 10);
    console.log(inputP);
    dashField.beginElement();
    if (inputP >= 0 && inputP < 100) {
        if (prevVal.split(';')[1] !== undefined) {
            dashField.attributes.values.nodeValue = `${prevVal.split(';')[1]}; ${314 - Math.round(inputP*3.14)}`;
        } else if (percent.value && parseInt(percent.value, 10) < 314) {
            dashField.attributes.values.nodeValue = `314; ${314 - Math.round(inputP*3.14)}`;
        }
        textPercent.innerHTML = `${inputP}%`;
    }
})

const mainButton = document.querySelector('.js-modal-btn');
const modalWindow = document.querySelector('.js-modal');
const closeButton = document.querySelector('.js-close');
const deleteButton = document.querySelector('.js-delete');

const closeElement = (element) => {
    element.style.display = 'none';
};
const openModalWindow = (element) => {
    element.style.display = 'block';
};

const openMainButton = (element) => {
    element.style.display = 'block';
};

const animateBtnWhenCloseModal = (element) => {
    element.classList.add('active');
};

mainButton.addEventListener('click', () => {
    openModalWindow(modalWindow);
    closeElement(mainButton);
});

closeButton.addEventListener('click', () => {
    closeElement(modalWindow);
    openMainButton(mainButton);
    animateBtnWhenCloseModal(mainButton);
});

deleteButton.addEventListener('click', () => {
    closeElement(modalWindow);
    openMainButton(mainButton);
    animateBtnWhenCloseModal(mainButton);
});