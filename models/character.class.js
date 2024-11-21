class Character extends movableObject {
    speed = 3;
    speedY = 1;

    poisoned = false;
    shocked = false;

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

    ImagesSwimming = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png',
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
    swimmingSound = new Audio('./audio/swimming2.mp3');
    swimmingSound2 = new Audio('./audio/swimming.mp3');
    electroShock = new Audio('./audio/electroshock.mp3');
    poisonCough = new Audio('./audio/cough.mp3');

    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.ImagesWatiting);
        this.loadImages(this.ImagesSwimming);
        this.loadImages(this.ImagesBubbleAttack);
        this.loadImages(this.ImagesSlap);
        this.loadImages(this.ImagesPoisoned);
        this.loadImages(this.ImagesShocked);
        this.loadImages(this.ImagesPoisonDead);
        this.loadImages(this.ImagesShockDead);

        this.animate();

        this.moveRight();
        this.moveLeft();
        this.moveUp();
        this.moveDown();
        this.attack();
        // this.fireBubbleTrap();

    }

    // fireBubbleTrap() {
    //     if (this.world.keyboard.Q) {
    //         new Bubble(200,200);
    //         this.x += this.speed;
    //     }
    // }


    animate() {
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.ImagesShockDead);
            }

            else if (this.isHurt && this.world.character.poisoned === true) {
                this.playAnimation(this.ImagesPoisoned);
                this.poisonCough.volume = 0.3;
                this.poisonCough.play();
            }

            else if (this.isHurt && this.world.character.shocked === true) {
                this.playAnimation(this.ImagesShocked);
                this.electroShock.play();
            }

            else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                this.playAnimation(this.ImagesSwimming);
            }


            else {
                this.playAnimation(this.ImagesWatiting)
            }

        }, 200)



    }

    attack() {
        //slap
        setInterval(() => {
            if (this.world.keyboard.SPACE) {
                this.playAnimation(this.ImagesSlap);
            }
            if (this.world.keyboard.Q) {
                this.playAnimation(this.ImagesBubbleAttack);
                this.world.bubbleTrap = new Bubble((this.x + 100), (this.y + 80));
                // this.x += this.speed;
            }
        }, 200);
    }

    moveRight() {
        setInterval(() => {
            this.swimmingSound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX) {
                this.x += this.speed;
                this.otherDirection = false;
                this.swimmingSound.volume = 0.1;
                this.swimmingSound.play();
            }
            this.world.cameraX = -this.x + 100;
        }, 1000 / 60)

    }

    moveLeft() {
        setInterval(() => {
            this.swimmingSound2.pause();
            if (this.world.keyboard.LEFT && this.x > -300) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.swimmingSound2.volume = 0.3;
                this.swimmingSound2.play();
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
        this.poisonCough.play();
        console.log('poisoned', this.energy);
    }

    isShocked() {
        // world.character.poisoned = false;
        // world.character.shocked = true;
        this.damage(2);
        this.playAnimation(this.ImagesShocked); // animation timwe has to be updated -- to fast
        this.electroShock.play();
        console.log('shocked', this.energy);
    }
}