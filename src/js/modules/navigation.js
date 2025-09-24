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
        link.addEventListener('click', e => handleLinkClick(e, link, navMenu, hamburger, true));
    });
}

function initHeroButtons(buttons) {
    buttons.forEach(button => {
        button.addEventListener('click', e => handleLinkClick(e, button, null, null, false));
    });
}

function initFooterLinks(links) {
    links.forEach(link => {
        link.addEventListener('click', e => handleLinkClick(e, link, null, null, false));
    });
}

// Função que decide se é link interno ou externo
function handleLinkClick(e, element, navMenu, hamburger, closeMenu) {
    const href = element.getAttribute('href');

    if (href.startsWith('#')) {
        e.preventDefault(); // só previne comportamento padrão para âncoras internas
        smoothScroll(element, closeMenu, navMenu, hamburger);
    }
    // Links externos abrem normalmente (WhatsApp, Instagram, telefone)
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
