
let mute = false;
let gameOn = false;

/**
 * Checks if the device is in landscape mode and adjusts the visibility
 * of the start screen and mobile buttons accordingly.
 */
function checkLandscapeMode() {
    if (window.matchMedia("(orientation: landscape)").matches && playerDied) {
        document.getElementById('game-over-screen').classList.remove('d-none');
        document.getElementById('rotateAdvice').classList.add('d-none');
    }
    if (window.matchMedia("(orientation: landscape)").matches && playerWon) {
        document.getElementById('winning-screen').classList.remove('d-none');
        document.getElementById('rotateAdvice').classList.add('d-none');
    }
    if (window.matchMedia("(orientation: landscape)").matches) {
        document.getElementById('start-screen').classList.remove('d-none');
        document.getElementById('rotateAdvice').classList.add('d-none');
    } 
    else {
        document.getElementById('rotateAdvice').classList.remove('d-none');
        document.getElementById('start-screen').classList.add('d-none');
        document.getElementById('game-over-screen').classList.add('d-none');
        document.getElementById('winning-screen').classList.add('d-none');
        document.getElementById('mobile-buttons').classList.add('d-none'); 
        if (isMobileDevice() && gameOn == true) {
            document.getElementById('mobile-buttons').classList.remove('d-none');
        }
    }
}

/**
 * Determines whether the current device is a mobile device.
 * @returns {boolean} True if the device is mobile, otherwise false.
 */
function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent);
}

function isTouchDevice() {
    return (('ontouchstart' in window) ||
       (navigator.maxTouchPoints > 0) ||
       (navigator.msMaxTouchPoints > 0));
  }

window.addEventListener("resize", checkLandscapeMode);

/**
 * Initializes the game by checking the landscape mode.
 * @async
 */
async function init() {
    checkLandscapeMode();
}

/**
 * Displays the "How to Play" screen by hiding the start screen.
 */
function howToPlay() {
    document.getElementById('start-screen').classList.add('d-none');
    document.getElementById('how-to-play-screen').classList.remove('d-none');
}

/**
 * Returns from the "How to Play" screen to the start screen.
 */
function goBack() {
    document.getElementById('how-to-play-screen').classList.add('d-none');
    document.getElementById('start-screen').classList.remove('d-none');
}

/**
 * Returns from the "Game Over" screen to the start screen.
 */
function goBack2() {
    document.getElementById('game-over-screen').classList.add('d-none');
    document.getElementById('start-screen').classList.remove('d-none');
}

/**
 * Returns from the "Winning" screen to the start screen.
 */
function goToHomeScreen() {
    document.getElementById('winning-screen').classList.add('d-none');
    document.getElementById('start-screen').classList.remove('d-none');
}

/**
 * Displays the winning screen and hides mobile buttons on mobile devices.
 */
function showWinningScreen() {
    document.getElementById('winning-screen').classList.remove('d-none');
    if (isMobileDevice()) {
        document.getElementById('mobile-buttons').classList.add('d-none');
    }
}

/**
 * Toggles the sound by muting the background audio.
 */
function toggleSound() {
    backgroundSound.muted = true;
}

/**
 * Clears all active intervals by iterating through all interval IDs.
 */
function clearAllIntervals() {
    for (let i = 0; i < 9999; i++) window.clearInterval(i);
}

/**
 * Toggles the mute state for all game sounds.
 */
function toggleMuteSound() {
    if (mute == false) {
        muteSound();
    } else {
        unmuteSound();
    }
}

/**
 * Mutes all game sounds and updates the mute button appearance.
 */
function muteSound() {
    mute = true;
    document.getElementById('muteWrapper').style.backgroundImage = "url(./img/volume-xmark-solid.svg)";
    gameSounds.forEach(sound => {
        sound.muted = true;
    });
}

/**
 * Unmutes all game sounds and updates the mute button appearance.
 */
function unmuteSound() {
    document.getElementById('muteWrapper').style.backgroundImage = "url(./img/volume-high-solid.svg)";
    mute = false;
    gameSounds.forEach(sound => {
        sound.muted = false;
    });
}
