class World {
    character = new Character();
    gameOverSound = new Audio ('./audio/game_over.mp3');
    slapSound = new Audio ('./audio/slap.mp3');
    level = level1;

    bubbleTrap;
    poisonBubble;

    canvas;
    ctx;
    keyboard;
    cameraX = 0;
    statusBar = new StatusBar();
    poisonCounter = new PoisonCounter();
    poison = 0;
    coinCounter = new CoinCounter();
    coins = 0;
    index = 0;

    gameActive = false

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.gameActive = true;
        this.draw();
        this.setWorld();
        this.checkCollisions();
        this.gameOver();
    }

    checkCollisions() {

        setInterval(() => {
            if (this.gameActive == true) {
                let boss = world.level.enemies.findLast((enemy) => enemy instanceof Endboss);
                boss.getHurt = false;
                world.character.poisoned = false;
                world.character.shocked = false;

                this.level.enemies.forEach((enemy) => {
                    if (this.character.isColliding(enemy) && !world.keyboard.SPACE && enemy.dead == false) {

                        if (enemy instanceof pufferFish && enemy.getHit == false) {
                            this.getPoisoned();
                            console.log(this.level.enemies[this.index].dead);
                        } else if (enemy instanceof JellyFish && enemy.trapped == false) {
                            this.getShocked(enemy);
                        } else if (enemy instanceof Endboss) {
                            this.character.damage(7);
                            console.log(enemy, this.character.energy);
                            world.statusBar.setPercentage(this.character.energy);
                        }
                    } else if (this.character.isColliding(enemy) && world.keyboard.SPACE) {
                        if (enemy instanceof pufferFish) {
                            this.killPufferfish(enemy);
                        } else if (enemy instanceof JellyFish) {
                            this.getShocked(enemy);
                        } else if (enemy instanceof Endboss) {
                            this.character.damage(7);
                            console.log(enemy, this.character.energy);
                            world.statusBar.setPercentage(this.character.energy);
                        }
                    } if (this.bubbleTrap != null && this.bubbleTrap.isColliding(enemy) && enemy instanceof JellyFish) {
                        this.JellyfishGetTrapped(enemy);
                        console.log(this.bubbleTrap.x, this.bubbleTrap.y, this.bubbleTrap.width, this.bubbleTrap.height);
                        this.bubbleTrap = null;
                    } if (this.poisonBubble != null && this.poisonBubble.isColliding(enemy) && enemy instanceof Endboss) {
                        let boss = world.level.enemies.findLast((enemy) => enemy instanceof Endboss);
                        boss.getHurt = true;
                        boss.damage(15);
                        console.log('Boss Energy ' + boss.energy);
                        this.poisonBubble = null;
                    }
                })

                this.level.collectableObjects.forEach((object) => {
                    if (this.character.isColliding(object)) {
                        if (object instanceof Coin) {
                            this.pickUpCoin(object);
                        } else if (object instanceof Poison) {
                            this.pickUpPoison(object);
                        }
                    }
                })

            }
        }, 500);
    }


    JellyfishGetTrapped(object) {
        this.index = this.searchEnemy(object.id);
        this.level.enemies[this.index].trapped = true;
        this.level.enemies[this.index].speed_Y = 1;
        setTimeout(() => {
            this.level.enemies[this.index].dead = true;
            console.log(object.id,this.index,this.level.enemies[this.index], this.level.enemies[this.index].dead);
        }, 1500);
    }

    killPufferfish(object) {
        this.slapSound.play();
        this.index = this.searchEnemy(object.id);
        console.log(this.index);
        this.level.enemies[this.index].getHit = true;
        world.character.poisoned = false;
        this.level.enemies[this.index].speed = 3;
        this.level.enemies[this.index].speed_Y = 1;
        console.log(this.level.enemies[this.index].dead);
        setTimeout(() => {
            this.level.enemies[this.index].dead = true;
            console.log(object.id,this.index,this.level.enemies[this.index], this.level.enemies[this.index].dead);

        }, 500);
    }

    getShocked(object) {
        this.character.damage(3);
        world.character.shocked = true;
        world.character.poisoned = false;

        this.index = this.searchEnemy(object.id);
        world.level.enemies[this.index].isShocking = true;
        console.log(this.index, world.level.enemies[this.index].isShocking);

        world.statusBar.setPercentage(this.character.energy);
    }

    getPoisoned() {
        this.character.damage(4);
        world.character.poisoned = true;
        world.character.shocked = false;
        console.log(this.character.energy);
        world.statusBar.setPercentage(this.character.energy);
    }

    pickUpCoin(object) {
        this.index = this.searchObject(object.id);
        if (this.level.collectableObjects[this.index].dead == false) {
            this.coins++;
            this.level.collectableObjects[this.index].dead = true;
            object.pickUpSound.volume = 0.1;
            object.pickUpSound.play();
        }
    }

    pickUpPoison(object) {
        this.index = this.searchObject(object.id);
        if (this.level.collectableObjects[this.index].dead == false) {
            object.pickUpSound.play();
            this.poison++;
            this.level.collectableObjects[this.index].dead = true;
        }

    }

    searchObject(id) {
        for (let index = 0; index < this.level.collectableObjects.length; index++) {
            if (this.level.collectableObjects[index].id === id) {
                return index;
            }
        }
        return null;
    }

    searchEnemy(id) {
        for (let index = 0; index < world.level.enemies.length; index++) {
            if (world.level.enemies[index].id === id) {
                return index;
            }
        }
        return null;
    }

    gameOver() {
        const GameOver = setInterval(() => {
            if (this.character.isDead()) {
                this.gameActive = false;
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                document.getElementById('screen').classList.remove('d-none');
                document.getElementById('screen').innerHTML = gameOverHTML();
                backgroundSound.pause();
                clearInterval(GameOver);
                clearInterval(this.checkCollisions)
                clearInterval(this.level.enemies[21].endBossAnimation)
                this.gameOver.volume = 0.5;
                this.gameOverSound.play();
            }
        }, 200);
    }

    setWorld() {
        this.character.world = this;
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            if (o.dead != true) {
                this.addToMap(o);
            }
        })
    }

    addToMap(object) {
        if (object.otherDirection) {
            this.flipImage(object);
        }
        object.draw(this.ctx);
        object.drawFrame(this.ctx);
        object.drawFrameoffset(this.ctx);
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
        if (this.bubbleTrap != null) {
            this.addToMap(this.bubbleTrap);
        };
        if (this.poisonBubble != null) {
            this.addToMap(this.poisonBubble);
        };



        this.ctx.translate(-this.cameraX, 0);
        //space for fixed objects
        this.addToMap(this.statusBar);

        this.addToMap(this.poisonCounter);
        this.ctx.font = "32px 'Luckiest Guy'"
        this.ctx.fillStyle = 'aliceblue';
        this.ctx.fillText(this.poison, 60, 110);

        this.addToMap(this.coinCounter);
        this.ctx.font = "32px 'Luckiest Guy'"
        this.ctx.fillStyle = 'aliceblue';
        this.ctx.fillText(this.coins, 60, 150);
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
