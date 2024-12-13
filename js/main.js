let mute = false;
let gameOn = false;

function checkLandscapeMode() {
    if (window.matchMedia("(orientation: landscape)").matches) {
        document.getElementById('start-screen').style.display = 'flex';
    } else {
        document.getElementById('start-screen').style.display = 'none';
        if (isMobileDevice() && gameOn == true) {
            document.getElementById('mobile-buttons').classList.remove('d-none');
        }
    }
}

function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent);
}

window.addEventListener("resize", checkLandscapeMode);

async function init() {
    checkLandscapeMode();   
}

function howToPlay() {
    document.getElementById('start-screen').classList.add('d-none');
    document.getElementById('how-to-play-screen').classList.remove('d-none');
}

function goBack() {
    document.getElementById('how-to-play-screen').classList.add('d-none');
    document.getElementById('start-screen').classList.remove('d-none');
}

function goBack2() {
    document.getElementById('game-over-screen').classList.add('d-none');
    document.getElementById('start-screen').classList.remove('d-none');
}

function goToHomeScreen() {
    document.getElementById('winning-screen').classList.add('d-none');
    document.getElementById('start-screen').classList.remove('d-none');
}

function showWinningScreen() {
    document.getElementById('winning-screen').classList.remove('d-none');
    if (isMobileDevice()) {
        document.getElementById('mobile-buttons').classList.add('d-none');
    }
}

function toggleSound() {
    backgroundSound.muted = true;
}

function clearAllIntervals() {
    for (let i = 0; i < 9999; i++) window.clearInterval(i);
}

function toggleMuteSound() {
    if (mute == false) {
        mute = true;
        document.getElementById('muteWrapper').style.backgroundImage = "url(./img/volume-xmark-solid.svg)";
        gameSounds.forEach(sound => {
            sound.muted = true;
        });
    } else {
        document.getElementById('muteWrapper').style.backgroundImage = "url(./img/volume-high-solid.svg)";
        mute = false
        gameSounds.forEach(sound => {
            sound.muted = false;
        });
    }




}
