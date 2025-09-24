export function initNavigation() {
    const hamburger   = document.querySelector('.hamburger');
    const navMenu     = document.querySelector('.nav-menu');
    const navLinks    = document.querySelectorAll('.nav-menu a, a[href="#home"]');
    const heroButtons = document.querySelectorAll('.hero-buttons a');
    const footerLinks = document.querySelectorAll('.footer-links a'); 

    if (!hamburger || !navMenu) return;

    initHamburger(hamburger, navMenu);
    initNavLinks(navLinks, navMenu, hamburger);
    initHeroButtons(heroButtons);
    initFooterLinks(footerLinks); 
}

function initHamburger(hamburger, navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

function initNavLinks(links, navMenu, hamburger) {
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            smoothScroll(link, true, navMenu, hamburger);
        });
    });
}

function initHeroButtons(buttons) {
    buttons.forEach(button => {
        button.addEventListener('click', e => {
            e.preventDefault();
            smoothScroll(button, false); 
        });
    });
}

function initFooterLinks(links) {
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            smoothScroll(link, false);
        });
    });
}

function smoothScroll(element, closeMenu, navMenu = null, hamburger = null) {
    element.classList.add('clicked');
    setTimeout(() => element.classList.remove('clicked'), 200);

    const targetId = element.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    if (closeMenu && navMenu && hamburger) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
}
