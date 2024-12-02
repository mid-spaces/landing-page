// assets/js/scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Carousel functionality (as above)
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-controls .prev');
    const nextButton = document.querySelector('.carousel-controls .next');
    let currentIndex = 0;
    const totalItems = carouselItems.length;

    // Show the first item
    showCarouselItem(currentIndex);

    // Carousel Event Listeners
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
        showCarouselItem(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
        showCarouselItem(currentIndex);
    });

    // Function to show carousel item
    function showCarouselItem(index) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    // Optional: Auto-slide functionality
    /*
    setInterval(() => {
        currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
        showCarouselItem(currentIndex);
    }, 5000);
    */

    // Toggle Navigation Menu
    const toggleButton = document.querySelector('.toggle-button');
    const navLinks = document.querySelector('header nav ul');

    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
