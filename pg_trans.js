// Modal functionality for Live Preview
const livePreviewButtons = document.querySelectorAll('.live-preview');
const modal = document.getElementById('previewModal');
const closeBtn = document.querySelector('.close-btn');

livePreviewButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Add hover effect with cursor animation (simplified)
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--cursor-x', `${x}px`);
        card.style.setProperty('--cursor-y', `${y}px`);
    });
    card.addEventListener('mouseleave', () => {
        card.style.removeProperty('--cursor-x');
        card.style.removeProperty('--cursor-y');
    });
});