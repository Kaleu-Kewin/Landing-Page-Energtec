import { initNavigation }    from './modules/navigation.js';
import { initHeaderEffects } from './modules/header.js';
import { initAnimations }    from './modules/animations.js';
import { initCounters }      from './modules/counters.js';
import { initLoader }        from './modules/loader.js';
import { initButtons }       from './modules/buttons.js';
import { initLazyLoad }      from './modules/lazyload.js';
import { initProgressBar }   from './modules/progressbar.js';
import { showNotification }  from './modules/notifications.js';

function safeInit(initializer, name) {
    try {
        initializer();
    } catch (error) {
        console.error(`Erro inesperado em ${name}:`, error);
        showNotification(`Ocorreu um erro inesperado!`, 'error');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    safeInit(initNavigation, 'Navigation');
    safeInit(initHeaderEffects, 'HeaderEffects');
    safeInit(initAnimations, 'Animations');
    safeInit(initCounters, 'Counters');
    safeInit(initLoader, 'Loader');
    safeInit(initButtons, 'Buttons');
    safeInit(initLazyLoad, 'LazyLoad');
    safeInit(initProgressBar, 'ProgressBar');

    console.log('Landing page carregada com sucesso');
});
