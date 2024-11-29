let canvas;
let world;
let keyboard = new Keyboard();
let backgroundSound = new Audio('./audio/background2.mp3')

function startGame() {

    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    document.getElementById('screen').classList.add('d-none');
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