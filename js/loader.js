export function initLoader() {
    window.addEventListener('load', () => {
        document.body.style.opacity    = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        setTimeout(() => document.body.style.opacity = '1', 100);
    });
}
