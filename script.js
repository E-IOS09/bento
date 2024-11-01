function toggleOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.classList.toggle('hidden');
}

// Adding click event listeners to navbar links to trigger overlay
document.querySelectorAll('.navbar-link').forEach(link => {
    link.addEventListener('click', toggleOverlay);
});