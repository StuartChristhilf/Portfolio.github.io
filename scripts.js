// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    const bootScreen = document.getElementById('bootScreen');
    const mainContent = document.getElementById('mainContent');
    const bootText = document.querySelector('.boot-text');
    const flash = document.querySelector('.flash');

    // Simulate booting up text display duration
    setTimeout(() => {
        bootText.style.display = 'none';
        flash.classList.add('expand');
    }, 2000); // Adjust the time as needed

    // Simulate the flash expansion duration
    setTimeout(() => {
        flash.classList.add('fade-out'); // Add class to trigger opacity change
    }, 4000); // Adjust the time as needed

    // Transition to main content
    setTimeout(() => {
        bootScreen.classList.add('fade-to-black'); // Add class to trigger background color change
        flash.style.display = 'none'; // Ensure flash is removed after fade out
        mainContent.classList.remove('hidden');
    }, 4500); // Adjust the time as needed to allow for fade effect
});