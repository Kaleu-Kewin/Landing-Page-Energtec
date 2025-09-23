export function initProgressBar() {
    const bar = document.createElement('div');

    bar.style.cssText = `
        position: fixed; top: 0; left: 0; width: 0%; height: 3px;
        background: linear-gradient(135deg, #ff6b35, #f7931e);
        z-index: 10001; transition: width 0.1s ease;
    `;

    document.body.appendChild(bar);

    window.addEventListener('scroll', () => {
        const scrollTop     = window.pageYOffset;
        const docHeight     = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        bar.style.width     = scrollPercent + '%';
    });
}
