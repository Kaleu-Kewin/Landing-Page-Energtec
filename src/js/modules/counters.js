function animateCounter(element) {
    const target       = element.textContent;
    const isPercentage = target.includes('%');
    const isPlus       = target.includes('+');
    const numericValue = parseInt(target.replace(/[^\d]/g, ''));
    let current = 0;
    const increment = numericValue / 50;

    const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
            current = numericValue;
            clearInterval(timer);
        }

        let displayValue = Math.floor(current);
        if (isPercentage) displayValue += '%';
        if (isPlus) displayValue += '+';

        element.textContent = displayValue;
    }, 30);
}

export function initCounters() {
    const stats = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => statsObserver.observe(stat));
}
