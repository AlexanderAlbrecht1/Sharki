class World {
    character = new Character();
    level = level1;

    canvas;
    ctx;
    keyboard;
    cameraX = 0;
    statusBar = new StatusBar();
    poisonCounter = new PoisonCounter();
    poison = 0;
    coinCounter = new CoinCounter();
    coins = 0;

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
            world.character.poisoned = false;
            world.character.shocked = false;

            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {

                    if (enemy instanceof pufferFish) {
                        this.character.damage(4);
                        world.character.poisoned = true;
                        world.character.shocked = false;
                        console.log(world.character.poisoned, this.character.energy); 
                        world.statusBar.setPercentage(this.character.energy);
                    }

                    else if (enemy instanceof JellyFish) {
                        this.character.damage(3);
                        world.character.shocked = true;
                        world.character.poisoned = false;
                        console.log(enemy, this.character.energy);
                        world.statusBar.setPercentage(this.character.energy);
                    }

                    else if (enemy instanceof Endboss) {
                        this.character.damage(7);
                        console.log(enemy, this.character.energy);
                        world.statusBar.setPercentage(this.character.energy);
                    }
                } 
                
            })

            this.level.collectableObjects.forEach((object) => {
                if (this.character.isColliding(object)) {
                    if (object instanceof Coin) {
                        this.coins++;
                    } else if (object instanceof Poison) {
                        this.poison++;
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
        this.addObjectsToMap(this.level.enemies)
        this.addObjectsToMap(this.level.collectableObjects);
        this.addToMap(this.character);


        this.ctx.translate(-this.cameraX, 0);
        //space for fixed objects
        this.addToMap(this.statusBar);

        this.addToMap(this.poisonCounter);
        this.ctx.font = "32px 'Luckiest Guy'"
        this.ctx.fillStyle = 'aliceblue';
        this.ctx.fillText(this.poison, 80, 110);

        this.addToMap(this.coinCounter);
        this.ctx.font = "32px 'Luckiest Guy'"
        this.ctx.fillStyle = 'aliceblue';
        this.ctx.fillText(this.coins, 180, 110);
        this.ctx.translate(this.cameraX, 0);


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
