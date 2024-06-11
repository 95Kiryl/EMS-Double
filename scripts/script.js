'use strict'

const btnOpenModal = document.querySelector('.content__btn'),
    btnCloseModal = document.querySelector('.close'),
    parentModalForm = document.querySelector('.modal'),
    mainContent = document.querySelector('.content');

const updateModal = () => {
    mainContent.classList.toggle('hidden');
    parentModalForm.classList.toggle('visible');
}


btnOpenModal.addEventListener('click', () => {
    updateModal();
})

btnCloseModal.addEventListener('click', () => {
    updateModal();
})


