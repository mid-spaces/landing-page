// assets/js/scripts.js

// Example: Toggle Navigation Menu for Mobile
const nav = document.querySelector('header nav');
const toggleButton = document.querySelector('.toggle-button');

toggleButton.addEventListener('click', () => {
    nav.classList.toggle('active');
});
