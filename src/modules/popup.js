/* globals openStoplight */

(() => {
    document.querySelector('.status__button--free').addEventListener('click', () => openStoplight(0));
    document.querySelector('.status__button--waiting').addEventListener('click', () => openStoplight(1));
    document.querySelector('.status__button--busy').addEventListener('click', () => openStoplight(2));
})();
