/**
 * Represents the main character, inheriting from the MovableObject class.
 * Handles animations, movements, attacks, and interactions in the game world.
 */
class Character extends movableObject {

    speed = 3;
    speedY = 1;
    imagePath;
    offsetLeft = 45;
    offsetRight = 90;
    offsetTop = 105;
    offsetBottom = 145;
    poisoned = false;
    shocked = false;
    endbossed = false;
    sleepCounter = 0;
    world;

    /**
     * Initializes the character, loading images and starting animations.
     */
    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.imagePath = new ImagesCharacter();
        this.loadImages(this.imagePath.ImagesWatiting);
        this.loadImages(this.imagePath.ImagesSwimming);
        this.loadImages(this.imagePath.ImagesBubbleAttack);
        this.loadImages(this.imagePath.ImagesPoisonBubbleAttack);
        this.loadImages(this.imagePath.ImagesSlap);
        this.loadImages(this.imagePath.ImagesPoisoned);
        this.loadImages(this.imagePath.ImagesShocked);
        this.loadImages(this.imagePath.ImagesPoisonDead);
        this.loadImages(this.imagePath.ImagesShockDead);
        this.loadImages(this.imagePath.ImagesFallAsSleep);
        this.loadImages(this.imagePath.ImagesSleeping);
        this.loadImages(this.imagePath.ImagesEndbossed);

        this.animate();
        this.motionSharkie();
        this.attack();
        this.count();
        this.wakeUp();
    }

    /**
     * Increments the sleep counter every second if the game is running and the character has energy.
     */
    count() {
        if (gameOn) {
            setInterval(() => {
                if (this.energy > 0) {
                    this.sleepCounter++;
                }
            }, 1000)
        }
    }

    /**
    * Animates the character based on its state and inputs from the game world.
    */
    animate() {
        let i = 0;
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.imagePath.ImagesShockDead);
            } else if (this.isHurt && this.world.character.poisoned === true) {
                this.poisonAnimation();
            } else if (this.isHurt && this.world.character.shocked === true) {
                this.shockAnimation();
            } else if (this.world.character.endbossed) {
                this.hurtByEndbossAnimation();
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                this.swimAnimation();
            } else if (this.sleepCounter > 5) {
                this.sleeping(i);
                i++;
            } else {
                this.playAnimation(this.imagePath.ImagesWatiting)
            }
        }, 200)
    }

    /**
     * Handles the character's attack actions based on keyboard inputs.
     */
    attack() {
        setInterval(() => {
            if (this.world.keyboard.SPACE) {
                this.slapAttack();
            } if (this.world.keyboard.Q) {
                this.bubbleAttack();
            } if (this.world.keyboard.E && this.world.poison > 0) {
                this.poisonBubbleAttack();
            }
        }, 200);
    }

    /**
     * Handles the character's movement based on keyboard inputs.
     */
    motionSharkie() {
        const motionShakrie = setInterval(() => {
            swimmingSound.pause();
            if (this.world.keyboard.RIGHT && this.x < (this.world.level.levelEndX -300 )) {
                this.moveRight();
            } if (this.world.keyboard.LEFT && this.x > -300) {
                this.moveLeft();
            } if (this.world.keyboard.UP && this.y >= -50) {
                this.moveUp();
            } if (this.world.keyboard.DOWN && this.y <= 320) {
                this.moveDown();
            }
        }, 1000 / 60)
    }


    /**
     * Plays the swimming animation and wakes the character up if sleeping.
     */
    swimAnimation() {
        this.wakeUp();
        this.playAnimation(this.imagePath.ImagesSwimming);
    }

    /**
     * Plays the animation for being hurt by the end boss and triggers the corresponding sound effect.
     */
    hurtByEndbossAnimation() {
        this.playAnimation(this.imagePath.ImagesEndbossed);
        hurtByEndboss.play();
    }

    /**
     * Plays the shocked animation and triggers the electric shock sound effect.
     */
    shockAnimation() {
        this.playAnimation(this.imagePath.ImagesShocked);
        electroShock.play();
    }

    /**
     * Plays the poisoned animation and triggers the poison cough sound effect.
     */
    poisonAnimation() {
        this.playAnimation(this.imagePath.ImagesPoisoned);
        poisonCough.volume = 0.3;
        poisonCough.play();
    }

    /**
     * Plays the sleeping animation. If the character is still falling asleep,
     * it shows a transition animation; otherwise, it plays the fully asleep animation.
     * 
     * @param {number} i - The current step of the sleeping animation.
     */
    sleeping(i) {
        snoringSound.play();
        if (i < 14) {
            this.playAnimation(this.imagePath.ImagesFallAsSleep);
        } else {
            this.playAnimation(this.imagePath.ImagesSleeping);
        }
    }

    /**
     * Executes the poison bubble attack animation, creates a poison bubble object,
     * and decreases the poison supply.
     */
    poisonBubbleAttack() {
        let poisonBubble;
        this.wakeUp();
        this.playAnimation(this.imagePath.ImagesPoisonBubbleAttack);
        this.world.poisonBubbleCounter++;
        poisonBubble = new PoisonBubble((this.x + 140),(this.y + 100),this.world.poisonBubbleCounter)
        this.world.poisonBubble.push(poisonBubble);
        this.world.poison--;
    }

    /**
     * Executes the regular bubble attack animation and creates a bubble object.
     */
    bubbleAttack() {
        let bubble;
        this.wakeUp();
        bubbleSound.play();
        this.playAnimation(this.imagePath.ImagesBubbleAttack);
        if (this.world.character.otherDirection) {
            this.world.bubbleCounter++;
            bubble = new Bubble((this.x), (this.y + 100),this.world.bubbleCounter);
            bubble.otherDirection = this.world.character.otherDirection;
            this.world.bubbleTrap.push(bubble);
        } else {
            this.world.bubbleCounter++;
            bubble = new Bubble((this.x +140), (this.y + 100),this.world.bubbleCounter);
            bubble.otherDirection = this.world.character.otherDirection;
            this.world.bubbleTrap.push(bubble);
        }
        // this.world.bubbleTrap.otherDirection = this.worsld.character.otherDirection;
    }

    /**
     * Executes the slap attack animation.
     */
    slapAttack() {
        this.wakeUp();
        this.playAnimation(this.imagePath.ImagesSlap);
    }

    /**
     * Moves the character to the right, updates the camera position,
     * and plays the swimming sound.
     */
    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
        swimmingSound.volume = 0.1;
        swimmingSound.play();
        this.world.cameraX = -this.x + 100;
    }

    /**
     * Moves the character to the left, updates the camera position,
     * and plays an alternative swimming sound.
     */
    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
        swimmingSound2.volume = 0.3;
        swimmingSound2.play();
        this.world.cameraX = -this.x + 100;
    }

    /**
     * Moves the character upwards.
     */
    moveUp() {
        this.y -= this.speed;
    }

    /**
     * Moves the character downwards.
     */
    moveDown() {
        this.y += this.speed;
    }

    /**
     * Reduces the character's energy due to poisoning, plays the poisoned animation,
     * and triggers the poison cough sound effect.
     */
    isPoisoned() {
        this.damage(6);
        this.playAnimation(this.imagePath.ImagesPoisoned);
        poisonCough.play();
    }

    /**
     * Reduces the character's energy due to an electric shock, plays the shocked animation,
     * and triggers the electric shock sound effect.
     */
    isShocked() {
        this.damage(4);
        this.playAnimation(this.imagePath.ImagesShocked);
        electroShock.play();
    }

    /**
     * Resets the sleep counter and pauses the snoring sound, effectively waking up the character.
     */
    wakeUp() {
        this.sleepCounter = 0;
        snoringSound.pause();
    }

}