
document.addEventListener('mousemove', (event) => {
    const eye = document.getElementById('catEyes');
    const catContainer = document.querySelector('.cat-container');

    const rect = catContainer.getBoundingClientRect();
    const containerCenterX = rect.left + rect.width / 2;
    const containerCenterY = rect.top + rect.height / 2;

    const maxOffset = 5;
    const offsetX = Math.min(maxOffset, (event.clientX - containerCenterX) * 0.05);
    const offsetY = Math.min(maxOffset, (event.clientY - containerCenterY) * 0.05);

    eye.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});