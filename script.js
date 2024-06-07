const container = document.querySelector('.container');
const divider = document.querySelector('.divider');
const imageB = document.querySelector('.image-b');

let isDragging = false;

container.addEventListener('mousedown', (e) => {
    isDragging = true;
    moveDivider(e);
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        moveDivider(e);
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

function moveDivider(e) {
    const containerRect = container.getBoundingClientRect();
    let offsetX = e.clientX - containerRect.left;

    // Ensure the divider stays within the bounds of the container
    if (offsetX < 0) offsetX = 0;
    if (offsetX > containerRect.width) offsetX = containerRect.width;

    const percentage = (offsetX / containerRect.width) * 100;
    divider.style.left = `${percentage}%`;
    imageB.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
}
