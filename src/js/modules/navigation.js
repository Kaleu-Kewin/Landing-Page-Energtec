export function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu   = document.querySelector('.nav-menu');
    const navLinks  = document.querySelectorAll('.nav-menu a, a[href="#home"]'); 

    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();

            link.classList.add('clicked');
            setTimeout(() => link.classList.remove('clicked'), 200);

            const targetId      = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight   = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }

            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

