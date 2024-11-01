class Character extends movableObject {
    speed = 3;
    speedY = 1;

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

    currentImage = 0;
    world;
    swimmingSound = new Audio('./audio/swimming2.mp3')
    swimmingSound2 = new Audio('./audio/swimming.mp3')

    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.ImagesWatiting);
        this.loadImages(this.ImagesSwimming);
        this.loadImages(this.ImagesBubbleAttack);

        this.animate();
        this.moveRight();
        this.moveLeft();
        this.moveUp();
        this.moveDown();
        this.attack();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.ImagesWatiting.length;
            let path = this.ImagesWatiting[i];
            this.img = this.imageCache[path];
            this.currentImage++
        }, 200)
    }

    attack() { 
        //bubble Attack
        setInterval(() => {
            if (this.world.keyboard.SPACE) {
                this.playAnimation(this.ImagesBubbleAttack);
        }
        }, 200);
    }

    moveRight() {
        
        setInterval(() => {
            if (this.world.keyboard.RIGHT) {
                this.playAnimation(this.ImagesSwimming);
            }
        }, 200)

        setInterval(() => {
            this.swimmingSound.pause();
            if (this.world.keyboard.RIGHT  && this.x < this.world.level.levelEndX) {
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
            if (this.world.keyboard.LEFT) {
                let i = this.currentImage % this.ImagesSwimming.length;
                let path = this.ImagesSwimming[i];
                this.img = this.imageCache[path];
                this.currentImage++
            }
        }, 200)
       
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
            if (this.world.keyboard.UP) {
                this.y -= this.speed;
            }
        }, 1000 / 60)
        setInterval(() => {
            if (this.world.keyboard.UP) {
                let i = this.currentImage % this.ImagesSwimming.length;
                let path = this.ImagesSwimming[i];
                this.img = this.imageCache[path];
                this.currentImage++
            }
        }, 200)
    }
    

    moveDown() {
        setInterval(() => {
            if (this.world.keyboard.DOWN) {
                this.y += this.speed;
            }
        }, 1000 / 60)
        setInterval(() => {
            if (this.world.keyboard.DOWN) {
                let i = this.currentImage % this.ImagesSwimming.length;
                let path = this.ImagesSwimming[i];
                this.img = this.imageCache[path];
                this.currentImage++
            }
        }, 200)
    }
}