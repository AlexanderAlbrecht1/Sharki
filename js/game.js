let canvas;
let world;

async function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);

    console.log('My character is', world.character);
    console.log('My character is', world.enemies[0]);

}