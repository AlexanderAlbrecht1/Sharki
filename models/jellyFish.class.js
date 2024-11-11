class JellyFish extends movableObject {
    speed = 0.09
    ImagesSwimming = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',
    ]


    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImages(this.ImagesSwimming);
        this.x = 220 + Math.random() * 500;
        this.y = Math.random() * 400
        this.width = 50;
        this.height = 80;

        this.speed = 0.09 + Math.random() * 0.2;
        this.animate();
    }

    animate() {
        this.moveLeft(0.09);
        
        //swimming movement
        setInterval(() => {
            this.playAnimation(this.ImagesSwimming);
        }, 500)
    }
}