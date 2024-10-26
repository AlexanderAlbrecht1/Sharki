class JellyFish extends movableObject {
    ImagesSwimming = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',
    ]
    currentImage = 0;

    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImages(this.ImagesSwimming);
        this.x = 220 + Math.random() * 500;
        this.y = Math.random() * 400
        this.width = 50;
        this.height = 80;
        this.animate();
    }

    animate() {
        //move from left to right
        setInterval( () => {
            if (this.x >= -50) {
                this.x -= .09;
            } else {
                this.x = 720;
                this.y = Math.random() * 480;
            };
        }, 1000/60)
        
        //swimming movement
        setInterval(() => {
            let i = this.currentImage % this.ImagesSwimming.length;
            let path = this.ImagesSwimming[i];
            this.img = this.imageCache[path];
            this.currentImage++
        }, 500)
    }
}