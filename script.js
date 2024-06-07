const slider = document.querySelector('.slider');
const overlay = document.querySelector('.overlay');
const comparisonSlider = document.querySelector('.comparison-slider');

comparisonSlider.addEventListener('mousemove', (e) => {
    const rect = comparisonSlider.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;

    // Ensure the slider stays within the bounds of the container
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;

    const percentage = (offsetX / rect.width) * 100;
    slider.style.left = `${percentage}%`;
    overlay.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
});
