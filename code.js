"use strict";

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.closeIcon');



button1.addEventListener('click',showModal);
button2.addEventListener('click',showModal);
button3.addEventListener('click',showModal);
closeModal.addEventListener('click',hideModal);

function showModal() {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
}

function hideModal(){
    modal.classList.add('hidden');
    modal.classList.remove('visible');
    
}

