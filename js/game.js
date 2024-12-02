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
]

// let backgroundSound = new Audio('./audio/background2.mp3');
// let swimmingSound = new Audio('./audio/swimming2.mp3');
// let swimmingSound2 = new Audio('./audio/swimming.mp3');
// let electroShock = new Audio('./audio/electroshock.mp3');
// let poisonCough = new Audio('./audio/cough.mp3');
// let bubbleSound = new Audio('./audio/bubble.mp3');
// let snoringSound = new Audio('./audio/snoring.mp3');
// let pickUpSound = new Audio('./audio/coin-pickUp.mp3');
// let pickUpSoundPoison = new Audio('./audio/poison_pickUp.mp3');
// let winningSound = new Audio ('./audio/win.mp3');
// let bossHurtSound = new Audio('./audio/bossHurt.mp3');
// let endbossSpanSound = new Audio ('./audio/endboss_span.mp3');
// let endbossAttackSound = new Audio ('./audio/endboss_attack.mp3');
// let gameOverSound = new Audio ('./audio/game_over.mp3');
// let slapSound = new Audio ('./audio/slap.mp3');


async function startGame() {

    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    document.getElementById('overlay').classList.add('d-none');
    document.getElementById('screen').style.background = 'transparent';
    backgroundSound.play();
}

function restartGame() {
    resetWorld();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    document.getElementById('screen').classList.add('d-none');
    backgroundSound.play();
}

function resetWorld() {
    world.level.enemies.forEach(enemy => {
        if (enemy instanceof pufferFish) {
            enemy.dead = false;
            enemy.getHit = false;
            enemy.speed_Y = 0;
            enemy.speed = 0.1 + Math.random() * 0.1;
        }
        if (enemy instanceof JellyFish) {
            enemy.dead = false;
            enemy.trapped = false;
            enemy.isShocking = false;
            enemy.speed_Y = 0.09 + Math.random() * 0.2;
        }
    });
    world.level.collectableObjects.forEach(item => {
        item.dead = false;
    });

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