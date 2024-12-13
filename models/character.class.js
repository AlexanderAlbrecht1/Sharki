
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

    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.imagePath= new ImagesCharacter();
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


    count() {
        if (gameOn) {
            setInterval(() => {
                if (this.energy > 0) {
                    this.sleepCounter++;
                }
            }, 1000)
        }
    }


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


    motionSharkie() {
        const motionShakrie = setInterval(() => {
            swimmingSound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX) {
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


    swimAnimation() {
        this.wakeUp();
        this.playAnimation(this.imagePath.ImagesSwimming);
    }


    hurtByEndbossAnimation() {
        this.playAnimation(this.imagePath.ImagesEndbossed);
        hurtByEndboss.play();
    }


    shockAnimation() {
        this.playAnimation(this.imagePath.ImagesShocked);
        electroShock.play();
    }


    poisonAnimation() {
        this.playAnimation(this.imagePath.ImagesPoisoned);
        poisonCough.volume = 0.3;
        poisonCough.play();
    }


    sleeping(i) {
        snoringSound.play();
        if (i < 14) {
            this.playAnimation(this.imagePath.ImagesFallAsSleep);
        } else {
            this.playAnimation(this.imagePath.ImagesSleeping);
        }
    }

    poisonBubbleAttack() {
        this.wakeUp();
        this.playAnimation(this.imagePath.ImagesPoisonBubbleAttack);
        this.world.poisonBubble = new PoisonBubble((this.x + 140), (this.y + 100));
        this.world.poison--;
    }


    bubbleAttack() {
        this.wakeUp();
        bubbleSound.play();
        this.playAnimation(this.imagePath.ImagesBubbleAttack);
        this.world.bubbleTrap = new Bubble((this.x + 140), (this.y + 100));
    }


    slapAttack() {
        this.wakeUp();
        this.playAnimation(this.imagePath.ImagesSlap);
    }


    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
        swimmingSound.volume = 0.1;
        swimmingSound.play();
        this.world.cameraX = -this.x + 100;
    }


    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
        swimmingSound2.volume = 0.3;
        swimmingSound2.play();
        this.world.cameraX = -this.x + 100;
    }


    moveUp() {
        this.y -= this.speed;
    }

    moveDown() {
        this.y += this.speed;
    }


    isPoisoned() {
        this.damage(6);
        this.playAnimation(this.imagePath.ImagesPoisoned);
        poisonCough.play();
        console.log('poisoned', this.energy);
    }


    isShocked() {
        this.damage(4);
        this.playAnimation(this.imagePath.ImagesShocked);
        electroShock.play();
        console.log('shocked', this.energy);
    }


    wakeUp() {
        this.sleepCounter = 0;
        snoringSound.pause();
    }
}