let canvas;
let world;
let keyboard = new Keyboard();



let gameSounds = [
    backgroundSound = new Audio('./audio/background2.mp3'),
    swimmingSound = new Audio('./audio/swimming2.mp3'),
    swimmingSound2 = new Audio('./audio/swimming.mp3'),
    electroShock = new Audio('./audio/electroshock.mp3'),
    poisonCough = new Audio('./audio/cough.mp3'),
    bubbleSound = new Audio('./audio/bubble.mp3'),
    snoringSound = new Audio('./audio/snoring.mp3'),
    pickUpSound = new Audio('./audio/coin-pickUp.mp3'),
    pickUpSoundPoison = new Audio('./audio/poison_pickUp.mp3'),
    winningSound = new Audio('./audio/win.mp3'),
    bossHurtSound = new Audio('./audio/bossHurt.mp3'),
    endbossSpanSound = new Audio('./audio/endboss_span.mp3'),
    endbossAttackSound = new Audio('./audio/endboss_attack.mp3'),
    gameOverSound = new Audio('./audio/game_over.mp3'),
    slapSound = new Audio('./audio/slap.mp3'),
    hurtByEndboss = new Audio('./audio/hurt-by-endboss.mp3')
]

async function startGame() {
    showLoadingScreen('start-screen');
    await buildWorld();
    setTimeout(hideLoadingScreen,5000);
    if (isMobileDevice() && world.gameActive == true) {
        document.getElementById('mobile-buttons').classList.remove('d-none');
        mobilePlay();
    }
}

function showLoadingScreen(screenID) {
    document.getElementById(screenID).classList.add('d-none');
    document.getElementById('loading-screen').classList.remove('d-none');
}

function hideLoadingScreen() {
    gameOn = true;
    document.getElementById('loading-screen').classList.add('d-none');
}

async function buildWorld() {
    await buildLevel();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    backgroundSound.play();
}

async function restartGame() {
    showLoadingScreen('game-over-screen');
    await buildWorld();
    setTimeout(hideLoadingScreen,3000);
    // resetLevel();
}

function youWin() {
    clearAllIntervals();
    gameOn = false;
    backgroundSound.pause();
    endbossAttackSound.pause();

    // clearInterval(world.checkCollisions());
    clearInterval(world.level.enemies[17].endbossAttack);

    winningSound.play();
    showWinningScreen();
}

function resetLevel() {
    start = 350;
    world.level.enemies.forEach(enemy => {
        start = +start + 250;
        if (enemy instanceof pufferFish) {
            resetPufferfish(enemy);
        } if (enemy instanceof JellyFish) {
            resetJellyFish(enemy);
        }
    });
    world.level.collectableObjects.forEach(item => {
        item.dead = false;
    });

}

function resetPufferfish(enemy) {
    enemy.dead = false;
    enemy.getHit = false;
    enemy.speed_Y = 0;
    enemy.speed = 0.1 + Math.random() * 0.1;
    enemy.x = start;
}

function resetJellyFish(enemy) {
    enemy.dead = false;
    enemy.trapped = false;
    enemy.isShocking = false;
    enemy.speed_Y = 0.09 + Math.random() * 0.2;
}

document.addEventListener("keydown", (event) => {
    if (event.keyCode == 39) {
        keyboard.RIGHT = true
    }
    if (event.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (event.keyCode == 38) {
        keyboard.UP = true;
    }
    if (event.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (event.keyCode == 81) {
        keyboard.Q = true;
    }
    if (event.keyCode == 69) {
        keyboard.E = true;
    }
    // console.log(event);
})

document.addEventListener("keyup", (event) => {
    if (event.keyCode == 39) {
        keyboard.RIGHT = false
    }
    if (event.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (event.keyCode == 38) {
        keyboard.UP = false;
    }
    if (event.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (event.keyCode == 81) {
        keyboard.Q = false;
    }
    if (event.keyCode == 69) {
        keyboard.E = false;
    }
})

function mobilePlay() {
    document.getElementById('up-arrow').addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.UP = true;
    })
    document.getElementById('up-arrow').addEventListener('touchend', (event) => {
        event.preventDefault();
        keyboard.UP = false;
    })
    document.getElementById('down-arrow').addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.DOWN = true;
    })
    document.getElementById('down-arrow').addEventListener('touchend', (event) => {
        event.preventDefault();
        keyboard.DOWN = false;
    })
    document.getElementById('left-arrow').addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.LEFT = true;
    })
    document.getElementById('left-arrow').addEventListener('touchend', (event) => {
        event.preventDefault();
        keyboard.LEFT = false;
    })
    document.getElementById('right-arrow').addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.RIGHT = true;
    })
    document.getElementById('right-arrow').addEventListener('touchend', (event) => {
        event.preventDefault();
        keyboard.RIGHT = false;
    })

    document.getElementById('Q').addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.Q = true;
    })
    document.getElementById('Q').addEventListener('touchend', (event) => {
        event.preventDefault();
        keyboard.Q = false;
    })
    document.getElementById('E').addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.E = true;
    })
    document.getElementById('E').addEventListener('touchend', (event) => {
        event.preventDefault();
        keyboard.E = false;
    })
    document.getElementById('space-bar').addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.SPACE = true;
    })
    document.getElementById('space-bar').addEventListener('touchend', (event) => {
        event.preventDefault();
        keyboard.SPACE = false;
    })
}
