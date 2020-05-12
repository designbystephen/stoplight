const animations = [
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

const stages = [
    'free',
    'waiting',
    'busy',
];

let currentStage = 0;

const stopLight = document.querySelector('.stoplight');
const stopLightText = document.querySelector('.stoplight-text');

const setStage = (stage) => {
    let nextStage = stage;

    // allow for rollover and cover out of bounds
    if(stage < 0) nextStage = 0;
    if(stage >= stages.length) nextStage = 0;

    // set current stage
    currentStage = nextStage;
}

const incrementStage = () => setStage(currentStage + 1);

const stripClassModifiers = () => {
    stages.forEach(stage => {
        stopLight.classList.remove(`stoplight--${stage}`);
    });
    animations.forEach(animation => {
        stopLightText.classList.remove(`animate__${animation}`);
    });
}

const addRandomAnimation = () => {
    const animationIndex = Math.floor(Math.random()*(animations.length - 0 + 1) + 0);
    stopLightText.classList.add(`animate__${animations[animationIndex] || animations[0]}`);
}

const changeStage = () => {
    stripClassModifiers();
    stopLight.classList.add(`stoplight--${stages[currentStage]}`);
}

const changeText = () => stopLightText.textContent = stages[currentStage];

const updateStageContent = () => {
    changeStage();
    changeText();
    addRandomAnimation();
}

stopLight.addEventListener('click', () => {
    incrementStage();
    updateStageContent();
});

(() => {
    setStage(0);
    updateStageContent();
})();
