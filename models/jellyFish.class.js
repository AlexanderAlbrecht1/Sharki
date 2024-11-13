class JellyFish extends movableObject {
    speed = 0.09
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


    constructor(x,y) {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImages(this.ImagesSwimming);
        this.x = x //500 + Math.random() * 2000;
        this.y = y //300 + Math.random() * 100
        this.width = 50;
        this.height = 80;

        this.speed = 0.09 + Math.random() * 0.2;
        this.animate();
    }

    animate() {
        // this.moveLeft(0.09);
        this.moveUp();
        // this.moveDown();
        
        //swimming movement
        setInterval(() => {
            this.playAnimation(this.ImagesSwimming);
            // if(this.world.character.shocked === true) {
            //     this.playAnimation(this.ImagesShocking);
            // }
        }, 500)

       
    }
}