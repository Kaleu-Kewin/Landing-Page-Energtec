import { initNavigation }    from './navigation.js';
import { initHeaderEffects } from './header.js';
import { initAnimations }    from './animations.js';
import { initCounters }      from './counters.js';
import { initLoader }        from './loader.js';
import { initButtons }       from './buttons.js';
import { initLazyLoad }      from './lazyload.js';
import { initProgressBar }   from './progressbar.js';
import { showNotification }  from './notifications.js';

function safeInit(initializer, name) {
    try {
        initializer();
    } catch (error) {
        console.error(`Erro inesperado em ${name}:`, error);
        showNotification(`Ocorreu um erro inesperado!`, 'error');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    safeInit(initNavigation,    'Navigation');
    safeInit(initHeaderEffects, 'HeaderEffects');
    safeInit(initAnimations,    'Animations');
    safeInit(initCounters,      'Counters');
    safeInit(initLoader,        'Loader');
    safeInit(initButtons,       'Buttons');
    safeInit(initLazyLoad,      'LazyLoad');
    safeInit(initProgressBar,   'ProgressBar');

    console.log('Landing page carregada com sucesso');
});
