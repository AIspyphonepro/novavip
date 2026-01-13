// l5.js - The Intelligence Layer
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.payment-card');
    const x = e.clientX;
    const y = e.clientY;

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardX = rect.left + rect.width / 2;
        const cardY = rect.top + rect.height / 2;

        const angleX = (y - cardY) / 30;
        const angleY = (cardX - x) / 30;

        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.02)`;
    });
});

document.addEventListener('mouseleave', () => {
    const cards = document.querySelectorAll('.payment-card');
    cards.forEach(card => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
    });
});