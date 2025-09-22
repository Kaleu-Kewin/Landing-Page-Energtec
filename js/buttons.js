export function initButtons() {
    const buttons = document.querySelectorAll('.btn');
    const serviceCards = document.querySelectorAll('.service-card');

    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => btn.style.transform = 'translateY(-2px) scale(1.05)');
        btn.addEventListener('mouseleave', () => btn.style.transform = 'translateY(0) scale(1)');
    });

    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => card.style.transform = 'translateY(-10px) scale(1.02)');
        card.addEventListener('mouseleave', () => card.style.transform = 'translateY(0) scale(1)');
    });

    buttons.forEach(button => {
        button.addEventListener('click', e => {
            const ripple = document.createElement('span');
            const rect   = button.getBoundingClientRect();
            const size   = Math.max(rect.width, rect.height);
            const x      = e.clientX - rect.left - size / 2;
            const y      = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute; width: ${size}px; height: ${size}px;
                left: ${x}px; top: ${y}px; background: rgba(255,255,255,0.3);
                border-radius: 50%; transform: scale(0);
                animation: ripple 0.6s linear; pointer-events: none;
            `;

            button.style.position = 'relative';
            button.style.overflow = 'hidden';
            button.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

    const style = document.createElement('style');
    style.textContent = `@keyframes ripple { to { transform: scale(4); opacity: 0; } }`;
    document.head.appendChild(style);
}
