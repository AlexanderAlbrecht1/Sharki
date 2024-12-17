/**
 * Represents the game world, managing the game state, entities, and interactions.
 */
class World {

    character = new Character();
    level = level1;
    bubbleTrap = [];
    bubbleCounter = 0;
    poisonBubble = [];
    poisonBubbleCounter = 0;  
    canvas;
    ctx;
    keyboard;
    cameraX = 0;
    statusBar = new StatusBar();
    statusBarBoss = new StatusBarBoss();
    poisonCounter = new PoisonCounter();
    poison = 0;
    coinCounter = new CoinCounter();
    coins = 0;
    index = 0;
    gameActive = false;

    /**
     * Creates an instance of the game world.
     * @param {HTMLCanvasElement} canvas - The canvas element for rendering the game.
     * @param {Keyboard} keyboard - The keyboard instance for input handling.
     */
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

    /**
     * Checks for collisions between the character, enemies, and objects.
     * Executes collision-based logic, such as damage or item collection.
     */
    checkCollisions() {
        setInterval(() => {
            if (gameOn == true) {
                this.resetStates();
                this.level.enemies.forEach((enemy) => {
                    if (this.character.isColliding(enemy) && !world.keyboard.SPACE && enemy.dead == false) {
                        this.characterGetHurt(enemy);
                        console.log(this.character.energy);
                        
                    } else if (this.character.isColliding(enemy) && world.keyboard.SPACE) {
                        if (enemy instanceof pufferFish && enemy.getHit == false) {
                            this.killPufferfish(enemy);
                        }
                    } if (this.bubbleTrap.length >= 1) {
                        this.checkEnemyBubbleHit(enemy);
                    } if (this.poisonBubble.length >= 1) {
                        this.checkPosionBubbleHit(enemy);
                    }


                    // if (this.poisonBubble != null && this.poisonBubble.isColliding(enemy) && enemy instanceof Endboss) {
                    //     this.bossGetHurt();
                    // }
                })
                this.checkPickUpItems();
            }
        }, 200);
    }

    checkPosionBubbleHit(enemy) {
        world.poisonBubble.forEach(bubble => {
            if(bubble.isColliding(enemy)) {
             if (enemy instanceof Endboss) {
                 console.log(bubble.id);
                 this.bossGetHurt();
                 let bubbleIndex = this.searchPoisonBubble(bubble.id);
                 console.log('Index = '+bubbleIndex);
                 world.poisonBubble.splice(bubbleIndex,1);
             }
            }
         });
    }

    checkEnemyBubbleHit(enemy) {
        world.bubbleTrap.forEach(bubble => {
           if(bubble.isColliding(enemy)) {
            if (enemy instanceof JellyFish) {
                console.log(bubble.id);
                this.JellyfishGetTrapped(enemy);
                let bubbleIndex = this.searchBubble(bubble.id)
                console.log('Index = '+bubbleIndex);
                world.bubbleTrap.splice(bubbleIndex,1);
            }
           }
        });
    }

    /**
     * Handles the logic for damaging the boss when hit by a poison bubble.
     */
    bossGetHurt() {
        let boss = world.level.enemies.findLast((enemy) => enemy instanceof Endboss);
        boss.getHurt = true;
        boss.damage(25);
        world.statusBarBoss.setPercentage(boss.energy);
    }

    /**
     * Handles the logic for damaging the character when colliding with an enemy.
     * @param {Enemy} enemy - The enemy causing the damage.
     */
    characterGetHurt(enemy) {
        this.character.sleepCounter = 0;
        snoringSound.pause();
        if (enemy instanceof pufferFish && enemy.getHit == false) {
            this.getPoisoned();
        } else if (enemy instanceof JellyFish && enemy.trapped == false) {
            this.getShocked(enemy);
        } else if (enemy instanceof Endboss) {
            this.getHurt(enemy);
        }
    }

    /**
     * Resets states such as poisoned, shocked, and endbossed for the character and boss.
     */
    resetStates() {
        let boss = world.level.enemies.findLast((enemy) => enemy instanceof Endboss);
        boss.getHurt = false;
        world.character.poisoned = false;
        world.character.shocked = false;
        world.character.endbossed = false;
    }

    /**
    * Checks if the character is colliding with collectable items and handles collection.
    */
    checkPickUpItems() {
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

    /**
     * Traps a jellyfish enemy in a bubble.
     * @param {JellyFish} object - The jellyfish enemy to trap.
     */
    JellyfishGetTrapped(object) {
        this.index = this.searchEnemy(object.id);
        this.level.enemies[this.index].trapped = true;
        this.level.enemies[this.index].isShocking = false;
        this.level.enemies[this.index].speed_Y = 1;
        const enemyIndex = this.index;
        setTimeout(() => {
            this.level.enemies[enemyIndex].dead = true;
        }, 1500);
        // this.bubbleTrap = null;
    }

    /**
     * Handles the logic for damaging and killing a pufferfish enemy.
     * @param {pufferFish} object - The pufferfish enemy to kill.
     */
    killPufferfish(object) {
        slapSound.play();
        this.index = this.searchEnemy(object.id);
        this.level.enemies[this.index].getHit = true;
        world.character.poisoned = false;
        this.level.enemies[this.index].speed = 3;
        this.level.enemies[this.index].speed_Y = 1;
        const enemyIndex = this.index;
        setTimeout(() => {
            this.level.enemies[enemyIndex].dead = true;
        }, 500);
    }

    /**
     * Damages the character and applies the "shocked" status.
     * @param {JellyFish} object - The jellyfish enemy causing the shock.
     */
    getShocked(object) {
        this.character.damage(1);
        world.character.shocked = true;
        world.character.poisoned = false;
        this.index = this.searchEnemy(object.id);
        world.level.enemies[this.index].isShocking = true;
        world.statusBar.setPercentage(this.character.energy);
    }

    /**
     * Damages the character and applies the "poisoned" status.
     */
    getPoisoned() {
        this.character.damage(2);
        world.character.poisoned = true;
        world.character.shocked = false;
        world.statusBar.setPercentage(this.character.energy);
    }

    /**
     * Damages the character when hit by the end boss.
     * @param {Endboss} enemy - The end boss causing the damage.
     */
    getHurt(enemy) {
        this.character.damage(5);
        world.character.endbossed = true;
        world.statusBar.setPercentage(this.character.energy);
    }

    /**
     * Collects a coin and updates the coin counter.
     * @param {Coin} object - The coin to collect.
     */
    pickUpCoin(object) {
        this.index = this.searchObject(object.id);
        if (this.level.collectableObjects[this.index].dead == false) {
            this.coins++;
            this.level.collectableObjects[this.index].dead = true;
            pickUpSound.volume = 0.1;
            pickUpSound.play();
        }
    }

    /**
     * Collects a poison bottle and updates the poison counter.
     * @param {Poison} object - The poison to collect.
     */
    pickUpPoison(object) {
        this.index = this.searchObject(object.id);
        if (this.level.collectableObjects[this.index].dead == false) {
            pickUpSoundPoison.play();
            this.poison++;
            this.level.collectableObjects[this.index].dead = true;
        }
    }

    /**
    * Searches for an object in the collectableObjects array by its ID.
    * @param {number} id - The ID of the object to find.
    * @returns {number | null} The index of the object if found, otherwise null.
    */
    searchObject(id) {
        for (let index = 0; index < this.level.collectableObjects.length; index++) {
            if (this.level.collectableObjects[index].id === id) {
                return index;
            }
        }
        return null;
    }

    /**
    * Searches for an enemy in the enemies array by its ID.
    * @param {number} id - The ID of the enemy to find.
    * @returns {number | null} The index of the enemy if found, otherwise null.
    */
    searchEnemy(id) {
        for (let index = 0; index < this.level.enemies.length; index++) {
            if (this.level.enemies[index].id === id) {
                return index;
            }
        }
        return null;
    }

    searchBubble(id) {
        for (let index = 0; index < world.bubbleTrap.length; index++) {
            if (world.bubbleTrap[index].id === id);
            return index;
        }
    }

    searchPoisonBubble(id) {
        for (let index = 0; index < world.poisonBubble.length; index++) {
            if (world.poisonBubble[index].id === id);
            return index;
        }
    }

    /**
    * Continuously checks if the character is dead and triggers the game over logic.
    */
    gameOver() {
        const GameOver = setInterval(() => {
            if (this.character.isDead()) {
                gameOn = false;
                world = undefined;
                clearAllIntervals();
                this.showGameOverScreen();
                this.handleGameOverSound();
            }
        }, 200);
    }

    /**
    * Handles the sound effects when the game is over.
    */
    handleGameOverSound() {
        backgroundSound.pause();
        this.gameOver.volume = 0.5;
        gameOverSound.play();
    }

    /**
    * Displays the game over screen and hides mobile controls if on a mobile device.
    */
    showGameOverScreen() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        document.getElementById('game-over-screen').classList.remove('d-none');
        if (isMobileDevice()) {
            document.getElementById('mobile-buttons').classList.add('d-none');
        };
    }

    /**
    * Sets the world reference in the character object.
    */
    setWorld() {
        this.character.world = this;
    }

    /**
    * Adds multiple objects to the map, skipping objects marked as dead.
    * @param {Object[]} objects - The array of objects to add to the map.
    */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            if (o.dead != true) {
                this.addToMap(o);
            }
        })
    }

    /**
    * Adds a single object to the map, handling direction flipping if needed.
    * @param {Object} object - The object to add to the map.
    */
    addToMap(object) {
        if (object.otherDirection) {
            this.flipImage(object);
        }
        object.draw(this.ctx);
        if (object.otherDirection) {
            this.flipImageBack(object);
        }
    }

    /**
    * Draws the game world, including characters, objects, and fixed elements.
    * Uses recursion via requestAnimationFrame for continuous rendering.
    */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.cameraX, 0);
        this.addObjectsToMap(this.level.backgroundObjects)
        this.addObjectsToMap(this.level.enemies)
        this.addObjectsToMap(this.level.collectableObjects);
        this.addToMap(this.character);
        this.addBubblesToMap();
        this.ctx.translate(-this.cameraX, 0);
        this.addFixedObjectsToMap();
        this.ctx.translate(-this.cameraX, 0);
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    /**
    * Adds active bubble traps and poison bubbles to the map.
    */
    addBubblesToMap() {
        if (this.bubbleTrap.length >= 1) {
            this.bubbleTrap.forEach(bubble => {
                this.addToMap(bubble);
            });

        };
        if (this.poisonBubble.length >=1) {
            this.poisonBubble.forEach((bubble) => {
                this.addToMap(bubble);
            })
        };
    }

    /**
    * Adds fixed elements like status bars and counters to the map.
    * Handles positioning and text rendering for poison and coin counts.
    */
    addFixedObjectsToMap() {
        this.addToMap(this.statusBar);
        if (this.character.x > 2000) {
            this.addToMap(this.statusBarBoss);
        };
        this.addToMap(this.poisonCounter);
        this.ctx.font = "32px 'Luckiest Guy'"
        this.ctx.fillStyle = 'aliceblue';
        this.ctx.fillText(this.poison, 60, 110);
        this.addToMap(this.coinCounter);
        this.ctx.font = "32px 'Luckiest Guy'"
        this.ctx.fillStyle = 'aliceblue';
        this.ctx.fillText(this.coins, 60, 150);
        this.ctx.translate(this.cameraX, 0);
    }

    /**
    * Flips an object's image horizontally for rendering.
    *  @param {Object} object - The object to flip.
    */
    flipImage(object) {
        this.ctx.save();
        this.ctx.translate(object.width, 0);
        this.ctx.scale(-1, 1);
        object.x = object.x * -1;
    }

    /**
    * Flips an object's image horizontally for rendering.
    * @param {Object} object - The object to flip.
    */
    flipImageBack(object) {
        object.x = object.x * -1;
        this.ctx.restore();
    }
}
