class pufferFish extends movableObject {
    speed = 0.25;
    
    ImagesSwimming = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png',
    ]


    constructor() {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png')
        this.loadImages(this.ImagesSwimming);
        this.x = 220 + Math.random() * 500;
        this.y = 10 + Math.random() * 400
        this.width = 50;
        this.height = 50;

        this.speed = 0.25 + Math.random() * 0.25;
        this.animate();
    }

    animate() {
        this.moveLeft();

        //swimming movement
        setInterval(() => {
            this.playAnimation(this.ImagesSwimming);
        }, 200)
    }

    

}