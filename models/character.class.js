class Character extends movableObject {
    speed = 3;
    speedY = 1;

    offsetLeft = 45;
    offsetRight = 90;
    offsetTop = 105;
    offsetBottom = 145;

    poisoned = false;
    shocked = false;
    endbossed = false;

    sleepCounter = 0;

    ImagesWatiting = [
        './img/1.Sharkie/1.IDLE/1.png',
        './img/1.Sharkie/1.IDLE/2.png',
        './img/1.Sharkie/1.IDLE/3.png',
        './img/1.Sharkie/1.IDLE/4.png',
        './img/1.Sharkie/1.IDLE/5.png',
        './img/1.Sharkie/1.IDLE/6.png',
        './img/1.Sharkie/1.IDLE/7.png',
        './img/1.Sharkie/1.IDLE/8.png',
        './img/1.Sharkie/1.IDLE/9.png',
        './img/1.Sharkie/1.IDLE/10.png',
        './img/1.Sharkie/1.IDLE/11.png',
        './img/1.Sharkie/1.IDLE/12.png',
        './img/1.Sharkie/1.IDLE/13.png',
        './img/1.Sharkie/1.IDLE/14.png',
        './img/1.Sharkie/1.IDLE/15.png',
        './img/1.Sharkie/1.IDLE/16.png',
        './img/1.Sharkie/1.IDLE/17.png',
        './img/1.Sharkie/1.IDLE/18.png',
    ]

    ImagesFallAsSleep = [
        './img/1.Sharkie/2.Long_IDLE/i1.png',
        './img/1.Sharkie/2.Long_IDLE/I2.png',
        './img/1.Sharkie/2.Long_IDLE/I3.png',
        './img/1.Sharkie/2.Long_IDLE/I4.png',
        './img/1.Sharkie/2.Long_IDLE/I5.png',
        './img/1.Sharkie/2.Long_IDLE/I6.png',
        './img/1.Sharkie/2.Long_IDLE/I7.png',
        './img/1.Sharkie/2.Long_IDLE/I8.png',
        './img/1.Sharkie/2.Long_IDLE/I9.png',
        './img/1.Sharkie/2.Long_IDLE/I10.png',
        './img/1.Sharkie/2.Long_IDLE/I11.png',
        './img/1.Sharkie/2.Long_IDLE/I12.png',
        './img/1.Sharkie/2.Long_IDLE/I13.png',
        './img/1.Sharkie/2.Long_IDLE/I14.png',
    ]

    ImagesSleeping = [
        './img/1.Sharkie/2.Long_IDLE/I11.png',
        './img/1.Sharkie/2.Long_IDLE/I12.png',
        './img/1.Sharkie/2.Long_IDLE/I13.png',
    ]

    ImagesSwimming = [
        './img/1.Sharkie/3.Swim/1.png',
        './img/1.Sharkie/3.Swim/2.png',
        './img/1.Sharkie/3.Swim/3.png',
        './img/1.Sharkie/3.Swim/4.png',
        './img/1.Sharkie/3.Swim/5.png',
        './img/1.Sharkie/3.Swim/6.png',
    ]

    ImagesBubbleAttack = [
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        './img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png',
    ]

    ImagesPoisonBubbleAttack = [
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/1.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/2.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/3.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/4.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/5.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/6.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/7.png',
        './img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/8.png',
    ]

    ImagesSlap = [
        './img/1.Sharkie/4.Attack/Fin slap/1.png',
        './img/1.Sharkie/4.Attack/Fin slap/2.png',
        './img/1.Sharkie/4.Attack/Fin slap/3.png',
        './img/1.Sharkie/4.Attack/Fin slap/4.png',
        './img/1.Sharkie/4.Attack/Fin slap/5.png',
        './img/1.Sharkie/4.Attack/Fin slap/6.png',
        './img/1.Sharkie/4.Attack/Fin slap/7.png',
        './img/1.Sharkie/4.Attack/Fin slap/8.png',
    ]

    ImagesPoisoned = [
        './img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
    ]

    ImagesEndbossed = [
        './img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        './img/1.Sharkie/5.Hurt/1.Poisoned/5.png',
    ]

    ImagesShocked = [
        './img/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        './img/1.Sharkie/5.Hurt/2.Electric shock/2.png',
        './img/1.Sharkie/5.Hurt/2.Electric shock/3.png',
    ]

    ImagesPoisonDead = [
        './img/1.Sharkie/6.dead/1.Poisoned/1.png',
        './img/1.Sharkie/6.dead/1.Poisoned/2.png',
        './img/1.Sharkie/6.dead/1.Poisoned/3.png',
        './img/1.Sharkie/6.dead/1.Poisoned/4.png',
        './img/1.Sharkie/6.dead/1.Poisoned/5.png',
        './img/1.Sharkie/6.dead/1.Poisoned/6.png',
        './img/1.Sharkie/6.dead/1.Poisoned/7.png',
        './img/1.Sharkie/6.dead/1.Poisoned/8.png',
        './img/1.Sharkie/6.dead/1.Poisoned/9.png',
        './img/1.Sharkie/6.dead/1.Poisoned/10.png',
        './img/1.Sharkie/6.dead/1.Poisoned/11.png',
        './img/1.Sharkie/6.dead/1.Poisoned/12.png',
    ]

    ImagesShockDead = [
        './img/1.Sharkie/6.dead/2.Electro_shock/3.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/2.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/4.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/5.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/8.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/9.png',
        './img/1.Sharkie/6.dead/2.Electro_shock/10.png',
    ]

    world;

    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.ImagesWatiting);
        this.loadImages(this.ImagesSwimming);
        this.loadImages(this.ImagesBubbleAttack);
        this.loadImages(this.ImagesPoisonBubbleAttack);
        this.loadImages(this.ImagesSlap);
        this.loadImages(this.ImagesPoisoned);
        this.loadImages(this.ImagesShocked);
        this.loadImages(this.ImagesPoisonDead);
        this.loadImages(this.ImagesShockDead);
        this.loadImages(this.ImagesFallAsSleep);
        this.loadImages(this.ImagesSleeping);
        this.loadImages(this.ImagesEndbossed);

        this.animate();
        this.motionSharkie();
        this.attack();
        this.count();
        this.wakeUp();
    }

    /**
     * 
     * increases a counter by 1 every second
     * 
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
     * 
     * shows different animations depending on the condition
     * 
     */
    animate() {
        let i = 0;
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.ImagesShockDead);
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
                this.playAnimation(this.ImagesWatiting)
            }
        }, 200)
    }

    /**
     * 
     * carries out attacks to injure enemies
     * 
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
     * 
     * moves sharkie through the level
     * 
     */
    motionSharkie() {
        const motionShakrie = setInterval(() => {
            swimmingSound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX) {
                this.moveRight();
            } if (this.world.keyboard.LEFT && this.x > -300) {
                this.moveLeft();
            } if (this.world.keyboard.UP && this.y >= -50) {
                this.moveUp();
            } if (this.world.keyboard.DOWN && this.y <= 350) {
                this.moveDown();
            }
        }, 1000 / 60)
    }

    /**
     * 
     * shows the swimming animation
     * 
     */
    swimAnimation() {
        this.wakeUp();
        this.playAnimation(this.ImagesSwimming);
    }

    /**
     * 
     * shows the animation when sharkie is injured by the final boss
     * 
     */
    hurtByEndbossAnimation() {
        this.playAnimation(this.ImagesEndbossed);
        hurtByEndboss.play();
    }

    /**
     * 
     * shows the animation when sharkie is shocked by a jellyfish
     * 
     */
    shockAnimation() {
        this.playAnimation(this.ImagesShocked);
        electroShock.play();
    }

    /**
     * 
     * shows the animation when sharkie is poisoned by a pufferfish
     * 
     */
    poisonAnimation() {
        this.playAnimation(this.ImagesPoisoned);
        poisonCough.volume = 0.3;
        poisonCough.play();
    }

    /**
     * 
     * shows the animation when sharkie is not moved and falls asleep
     * 
     * @param {number} i - frame counter that starts at 0 and increments by 1 at each interval
     */
    sleeping(i) {
        snoringSound.play();
        if (i < 14) {
            this.playAnimation(this.ImagesFallAsSleep);
        } else {
            this.playAnimation(this.ImagesSleeping);
        }
    }

    /**
     * 
     * shows the animation when sharkie fires a bubble attack
     * 
     */
    poisonBubbleAttack() {
        this.wakeUp();
        this.playAnimation(this.ImagesPoisonBubbleAttack);
        this.world.poisonBubble = new PoisonBubble((this.x + 140), (this.y + 100));
        this.world.poison--;
    }

    /**
     * 
     * shows the animation when sharkie fires a poison bubble attack
     * 
     */
    bubbleAttack() {
        this.wakeUp();
        bubbleSound.play();
        this.playAnimation(this.ImagesBubbleAttack);
        this.world.bubbleTrap = new Bubble((this.x + 140), (this.y + 100));
    }

    /**
     * 
     * shows the animation when sharkie strikes with his tail
     * 
     */
    slapAttack() {
        this.wakeUp();
        this.playAnimation(this.ImagesSlap);
    }

    /**
     * 
     * moves sharkie to the right and plays swimming sound
     * 
     */
    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
        swimmingSound.volume = 0.1;
        swimmingSound.play();
        this.world.cameraX = -this.x + 100;
    }

    /**
     * 
     * moves sharkie to the left and plays swimming sound
     * 
     */
    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
        swimmingSound2.volume = 0.3;
        swimmingSound2.play();
        this.world.cameraX = -this.x + 100;
    }

    /**
     * 
     * moves sharkie up
     * 
     */
    moveUp() {
        this.y -= this.speed;
    }

    /**
     * 
     * moves sharkie down
     * 
     */
    moveDown() {
        this.y += this.speed;
    }

    /**
     * 
     * drains sharkie energy and shows the animation when he is poisoned
     * 
     */
    isPoisoned() {
        this.damage(6);
        this.playAnimation(this.ImagesPoisoned);
        poisonCough.play();
        console.log('poisoned', this.energy);
    }

    /**
     * 
     * drains sharkie energy and shows the animation when he is shocked
     * 
     */
    isShocked() {
        this.damage(4);
        this.playAnimation(this.ImagesShocked);
        electroShock.play();
        console.log('shocked', this.energy);
    }

    /**
     * 
     * resets the sleep counter to 0
     * 
     */
    wakeUp() {
        this.sleepCounter = 0;
        snoringSound.pause();
    }
}