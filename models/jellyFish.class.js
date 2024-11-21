class JellyFish extends movableObject {

    ImagesSwimming = [
        './img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        './img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        './img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        './img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',
    ]

    ImagesShocking = [
        './img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
        './img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
        './img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
        './img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png',
    ]

    ImagesDead = [
        './img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png',
        './img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png',
        './img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png',
        './img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png',
    ]

    isShocking = false;


    constructor(x,y,id) {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImages(this.ImagesSwimming);
        this.loadImages(this.ImagesShocking);
        this.loadImages(this.ImagesDead);
        this.x = x //500 + Math.random() * 2000;
        this.y = y //300 + Math.random() * 100
        this.width = 50;
        this.height = 80;
        this.id = id;
        this.trapped = false;
        this.speed_Y = 0.09 + Math.random() * 0.2;
        this.animate();
    }

    animate() {
        // this.moveLeft(0.09);
        this.moveUp();
        // this.moveDown();
        
        //swimming movement
        setInterval(() => {
            // this.playAnimation(this.ImagesSwimming);
            if(this.isShocking) {
                this.playAnimation(this.ImagesShocking);   
            } else if (this.trapped) {
                this.playAnimation(this.ImagesDead);
            } else {
                this.playAnimation(this.ImagesSwimming);
            }
        }, 300)

       
    }
}