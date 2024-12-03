// assets/js/scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Toggle Navigation Menu
    const toggleButton = document.querySelector('.toggle-button');
    const navLinks = document.querySelector('header nav ul');

    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
