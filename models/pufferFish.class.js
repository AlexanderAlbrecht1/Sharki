class pufferFish extends movableObject {
    speed = 0.25;
    
    ImagesSwimming = [
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition1.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition2.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition3.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition4.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition5.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim1.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim2.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim3.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim4.png',
        './img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim5.png',
    ]
    


    constructor(x) {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png')
        this.loadImages(this.ImagesSwimming);
        this.x = x //500 + Math.random() * 2000;
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