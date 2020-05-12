/* globals loadStoplight */

(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const initialStage = urlParams.get('initialStage');
    loadStoplight(Number(initialStage));
})();
