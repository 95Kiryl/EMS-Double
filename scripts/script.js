'use strict'

const btnOpenModal = document.querySelector('.content__btn'),
    btnCloseModal = document.querySelector('.close'),
    parentModalForm = document.querySelector('.modal'),
    mainContent = document.querySelector('.content');


const modalVisible = () => {
    mainContent.classList.toggle('hidden');
    parentModalForm.classList.toggle('visible');
}

btnOpenModal.addEventListener('click', () => {
    modalVisible();
})

btnCloseModal.addEventListener('click', () => {
    modalVisible();
})

parentModalForm.addEventListener('click', () => {
    modalVisible();
})

