'use strict';

const percent = document.querySelector('.input-dash');
const dashField = document.querySelector('.dash');
const textPercent = document.querySelector('.validPercent');

percent.addEventListener('change', () => {
    let prevVal = dashField.attributes["values"].nodeValue;
    let inputP = parseInt(percent.value);
    console.log(inputP);
    dashField.beginElement();
    if (inputP >= 0 && inputP < 100) {
        if (prevVal.split(';')[1] !== undefined) {
            dashField.attributes["values"].nodeValue = `${prevVal.split(';')[1]}; ${314 - Math.round(inputP*3.14)}`;
        } else if (percent.value && parseInt(percent.value) < 314) {
            dashField.attributes["values"].nodeValue = `314; ${314 - Math.round(inputP*3.14)}`;
        }
        textPercent.innerHTML = `${inputP}%`;
    }
})

function setPosition() {
    let date = new Date;
    let minutes = date.getMinutes();
    let hours = 18;
    hours = (hours > 12) ? hours - 12 : hours;
    minutes = (minutes * 60);
    hours = (hours * 3600) + minutes;
    document.querySelector('.animation-clock-arrow-minute').setAttribute('transform', 'rotate(' + 360 * (minutes / 3600) + ',200,200)');
    document.querySelector('.animation-clock-arrow-hour').setAttribute('transform', 'rotate(' + 360 * (hours / 43200) + ',200,200)');
}



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