/* globals STOPLIGHT_QUERY STOPLIGHT_TEXT_QUERY CURRENT_STAGE STAGES ANIMATIONS */
let currentStage = 0;

const ANIMATIONS = [
    'bounce',
    'flash',
    'pulse',
    'rubberBand',
    'shakeX',
    'shakeY',
    'headShake',
    'swing',
    'tada',
    'wobble',
    'jello',
    'heartBeat',
];

const STAGES = [
    'free',
    'waiting',
    'busy',
];

const STOPLIGHT_QUERY = '.stoplight';
const STOPLIGHT_TEXT_QUERY = '.stoplight__text';

const getStoplight = () => document.querySelector(STOPLIGHT_QUERY);
const getStoplightText = () => document.querySelector(STOPLIGHT_TEXT_QUERY);
const getStages = () => STAGES;
const getAnimations = () => ANIMATIONS;
const getCurrentStage = () => currentStage;

const setStage = (stage) => {
    let nextStage = stage;

    // allow for rollover and cover out of bounds
    if(stage < 0) nextStage = 0;
    if(stage >= getStages().length) nextStage = 0;

    // set current stage
    currentStage = nextStage;
};

const incrementStage = () => setStage(getCurrentStage() + 1);

const stripClassModifiers = () => {
    getStages().forEach(stage => {
        getStoplight().classList.remove(`stoplight--${stage}`);
    });
    getAnimations().forEach(animation => {
        getStoplightText().classList.remove(`animate__${animation}`);
    });
};

const addRandomAnimation = () => {
    const animationIndex = Math.floor(Math.random()*(getAnimations().length - 0 + 1) + 0);
    getStoplightText().classList.add(`animate__${getAnimations()[animationIndex] || getAnimations()[0]}`);
};

const changeStage = () => {
    stripClassModifiers();
    getStoplight().classList.add(`stoplight--${getStages()[getCurrentStage()]}`);
};

const changeText = () => getStoplightText().textContent = getStages()[getCurrentStage()];

const updateStageContent = () => {
    changeStage();
    changeText();
    addRandomAnimation();
};

const loadStoplight = (initialStage) => {
    setStage(initialStage);

    getStoplight().addEventListener('click', () => {
        incrementStage();
        updateStageContent();
    });

    updateStageContent();
};

const openStoplight = (stage) => {
    const url = browser.runtime.getURL('stoplight.html');

    browser.tabs.create({
        url: `${url}?initialStage=${stage}`,
    }).then(() => {
        window.close();
    });
};

