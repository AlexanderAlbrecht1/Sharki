class Character extends movableObject {
    speed = 3;
    speedY = 1;
    
    offsetLeft = 25;
    offsetRight = 45;
    offsetTop = 95;
    offsetBottom = 135;

    poisoned = false;
    shocked = false;

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

        this.animate();

        this.moveRight();
        this.moveLeft();
        this.moveUp();
        this.moveDown();
        this.attack();
        this.count();
        this.wakeUp();
        // this.fireBubbleTrap();

    }

    // fireBubbleTrap() {
    //     if (this.world.keyboard.Q) {
    //         new Bubble(200,200);
    //         this.x += this.speed;
    //     }
    // }


    count() {
        setInterval(() => {
            this.sleepCounter++;
            console.log(this.sleepCounter);
            
        },1000)
    }

    animate() {
       let i = 0;
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.ImagesShockDead);
                // setTimeout(() => {
                //     world.gameOver()
                // },1000)
            }

            else if (this.isHurt && this.world.character.poisoned === true) {
                this.playAnimation(this.ImagesPoisoned);
                poisonCough.volume = 0.3;
                poisonCough.play();
            }

            else if (this.isHurt && this.world.character.shocked === true) {
                this.playAnimation(this.ImagesShocked);
                electroShock.play();
            }

            else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                this.wakeUp();
                this.playAnimation(this.ImagesSwimming);
            }

            else if (this.sleepCounter > 5) {
                snoringSound.play();
                if (i < 14) {
                    this.playAnimation(this.ImagesFallAsSleep);
                    i++;
                } else {
                    this.playAnimation(this.ImagesSleeping);
                }
                
                // this.playAnimation(this.ImagesSleeping);
                // this.fallAsSleep = true;
            }


            else {
                this.playAnimation(this.ImagesWatiting)
            }

        }, 200)



    }

    attack() {
        setInterval(() => {
            if (this.world.keyboard.SPACE) {
                this.wakeUp();
                this.playAnimation(this.ImagesSlap);
            }
            if (this.world.keyboard.Q) {
                this.wakeUp();
                bubbleSound.play();
                this.playAnimation(this.ImagesBubbleAttack);
                this.world.bubbleTrap = new Bubble((this.x + 100), (this.y + 80));
            }
            if (this.world.keyboard.E && this.world.poison > 0) {
                this.wakeUp();
                this.playAnimation(this.ImagesPoisonBubbleAttack);
                this.world.poisonBubble = new PoisonBubble((this.x + 100), (this.y + 80));
                this.world.poison--;
            }
        }, 200);
    }

    moveRight() {
        setInterval(() => {
            swimmingSound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX) {
                this.x += this.speed;
                this.otherDirection = false;
                swimmingSound.volume = 0.1;
                swimmingSound.play();
            }
            this.world.cameraX = -this.x + 100;
        }, 1000 / 60)

    }

    moveLeft() {
        setInterval(() => {
            swimmingSound2.pause();
            if (this.world.keyboard.LEFT && this.x > -300) {
                this.x -= this.speed;
                this.otherDirection = true;
                swimmingSound2.volume = 0.3;
                swimmingSound2.play();
            }
            this.world.cameraX = -this.x + 100;
        }, 1000 / 60)

    }

    moveUp() {
        setInterval(() => {
            if (this.world.keyboard.UP && this.y >= -50) {
                this.y -= this.speed;
            }
        }, 1000 / 60)
    }


    moveDown() {
        setInterval(() => {
            if (this.world.keyboard.DOWN && this.y <= 350) {
                this.y += this.speed;
            }
        }, 1000 / 60)
    }

    isPoisoned() {
        // world.character.shocked = false;
        // world.character.poisoned = true;
        this.damage(3);
        this.playAnimation(this.ImagesPoisoned); // animation timwe has to be updated -- to fast
        poisonCough.play();
        console.log('poisoned', this.energy);
    }

    isShocked() {
        // world.character.poisoned = false;
        // world.character.shocked = true;
        this.damage(2);
        this.playAnimation(this.ImagesShocked); // animation timwe has to be updated -- to fast
        electroShock.play();
        console.log('shocked', this.energy);
    }

    wakeUp() {
        this.sleepCounter = 0;
        snoringSound.pause();
    }
}