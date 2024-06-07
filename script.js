const images = [
    { a: 'imageA.png', b: 'imageB.png' },
    { a: 'imageC.png', b: 'imageD.png' },
    { a: 'imageE.png', b: 'imageF.png' }
];

let currentIndex = 0;

const slider = document.querySelector('.slider');
const overlay = document.querySelector('.overlay');
const comparisonSlider = document.querySelector('.comparison-slider');
const imageA = document.querySelector('.image-a');
const imageB = document.querySelector('.image-b');

function updateImages(index) {
    imageA.src = images[index].a;
    imageB.src = images[index].b;
    // Reset the slider position and clip paths
    slider.style.left = '50%';
    overlay.style.clipPath = 'inset(0 50% 0 0)';
}

comparisonSlider.addEventListener('mousemove', (e) => {
    const rect = comparisonSlider.getBoundingClientRect();
    let offsetX = e.clientX - rect.left;

    // Ensure the offsetX stays within the bounds of the container
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;

    const percentage = (offsetX / rect.width) * 100;
    slider.style.left = `${percentage}%`;
    overlay.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImages(currentIndex);
    } else if (e.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % images.length;
        updateImages(currentIndex);
    }
});

// Initialize the first pair of images
updateImages(currentIndex);
