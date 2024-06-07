const container = document.querySelector('.container');
const divider = document.querySelector('.divider');
const imageA = document.querySelector('.image-a');
const imageB = document.querySelector('.image-b');

container.addEventListener('mousemove', (e) => {
    const containerRect = container.getBoundingClientRect();
    let offsetX = e.clientX - containerRect.left;

    // Ensure the offsetX stays within the bounds of the container
    if (offsetX < 0) offsetX = 0;
    if (offsetX > containerRect.width) offsetX = containerRect.width;

    const percentage = (offsetX / containerRect.width) * 100;
    divider.style.left = `${percentage}%`;
    imageA.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    imageB.style.clipPath = `inset(0 0 0 ${percentage}%)`;
});
