class pufferFish extends movableObject {
    ImagesSwimming = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png',
    ]
    currentImage = 0;

    constructor() {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png')
        this.loadImages(this.ImagesSwimming);
        this.x = 220 + Math.random() * 500;
        this.y = Math.random() * 400
        this.width = 50;
        this.height = 50;
        this.animate();
    }

    animate() {
        //move from left to right
        setInterval( () => {
            if (this.x >= -50) {
                this.x -= .3;
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
        }, 200)
    }

}