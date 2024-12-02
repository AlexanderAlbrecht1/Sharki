let mute = false;

async function init() {
    if (window.matchMedia("(orientation: landscape)").matches) {
        console.log("Landscape-Modus erkannt. Anwendung startet...");
        document.getElementById('overlay').innerHTML = startScreenHTML();
        // canvas = document.getElementById('canvas');
        // world = new World(canvas, keyboard);
    }
}

function howToPlay(screen) {
    document.getElementById('screen').innerHTML = howToPlayHTML();

}

function goBack() {
    document.getElementById('screen').innerHTML = startScreenHTML();
}

function showWinningScreen() {
    document.getElementById('screen').style.backgroundImage = "url('./img/3. Background/Dark/completo.png')"
    document.getElementById('overlay').classList.remove('d-none');
    document.getElementById('overlay').innerHTML = showWinningScreenHTML();
}

function stopGame() {
    clearAllIntervals();
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

        // backgroundSound.muted = true;
        // world.character.swimmingSound.muted = true;
        // world.character.swimmingSound2.muted = true;
        // world.character.electroShock.muted = true;
        // world.character.poisonCough.muted = true;
        // world.level.collectableObjects.forEach(item => {
        //     item.pickUpSound.muted = true;
        // });
    } else {
        document.getElementById('muteWrapper').style.backgroundImage = "url(./img/volume-high-solid.svg)";
        mute = false
        gameSounds.forEach(sound => {
            sound.muted = false;
        });
        // backgroundSound.muted = false;
        // world.character.swimmingSound.muted = false;
        // world.character.swimmingSound2.muted = false;
        // world.character.electroShock.muted = false;
        // world.character.poisonCough.muted = false;
        // world.level.collectableObjects.forEach(item => {
        //     item.pickUpSound.muted = false;
        // });
    }

}
