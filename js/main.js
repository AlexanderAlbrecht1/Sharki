async function init() {
    if (window.matchMedia("(orientation: landscape)").matches) {
        console.log("Landscape-Modus erkannt. Anwendung startet...");
        document.getElementById('screen').innerHTML = startScreenHTML();
    }
}

function howToPlay(screen) {
    document.getElementById('screen').innerHTML = howToPlayHTML();

}

function goBack() {
    document.getElementById('screen').innerHTML = startScreenHTML();
}

function toggleSound() {
    backgroundSound.muted = true;
}

function clearAllIntervals() {
    for (let i = 0; i < 9999; i++) window.clearInterval(i);
}
