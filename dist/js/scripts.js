"use strict";

const burger = document.querySelector('.hamburger');

burger.addEventListener('click', () => {
    burger.classList.toggle('hamburger_active');
})