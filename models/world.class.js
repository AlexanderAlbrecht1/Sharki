class World {
    character = new Character();
    level = level1;

    canvas;
    ctx;
    keyboard;
    cameraX = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {

                    console.log('Collision', enemy);
                    if (enemy instanceof pufferFish ) {
                        world.character.shocked = false;
                        world.character.poisoned = true;
                        setTimeout(() => {
                            world.character.poisoned = false;
                        }, 3000);
                        this.character.energy -= 2;
                        console.log('Collision', this.character.energy);
                    } 
                    if (enemy instanceof JellyFish) {
                        world.character.poisoned = false;
                        world.character.shocked = true;
                        setTimeout(() => {
                            world.character.shocked = false;
                        }, 3000);
                        this.character.energy -= 2;
                        console.log('Nothing happend', this.character.energy);

                    }                   
                } 
            })
        }, 1000);
    }

    setWorld() {
        this.character.world = this;
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }

    addToMap(object) {
        if (object.otherDirection) {
            this.flipImage(object);
        }
        object.draw(this.ctx);
        object.drawFrame(this.ctx);
        if (object.otherDirection) {
            this.flipImageBack(object);
        }
    }

    draw() {
        //clear canvas!
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.cameraX, 0);

        this.addObjectsToMap(this.level.backgroundObjects)
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies)

        this.ctx.translate(-this.cameraX, 0);

        // repeat drawing as often as possible
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    flipImage(object) {
        this.ctx.save();
        this.ctx.translate(object.width, 0);
        this.ctx.scale(-1, 1);
        object.x = object.x * -1;
    }

    flipImageBack(object) {
        object.x = object.x * -1;
        this.ctx.restore();
    }


}
