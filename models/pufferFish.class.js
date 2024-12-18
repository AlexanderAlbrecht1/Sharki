
class pufferFish extends movableObject {

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
    ];

    ImagesDead = [
        './img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png',
        './img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 2 (can animate by going down to the floor after the Fin Slap attack).png',
        './img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 3 (can animate by going down to the floor after the Fin Slap attack).png',
    ];

    constructor(x, id) {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png');
        this.loadImages(this.ImagesSwimming);
        this.loadImages(this.ImagesDead);

        this.x = x;
        this.y = 10 + Math.random() * 400;
        this.width = 50;
        this.height = 50;
        this.id = id;
        this.dead = false;
        this.getHit = false;
        this.speed = 0.1 + Math.random() * 0.1;
        this.speed_Y = 0;

        this.animate();
    }

    /**
     * Animates the puffer fish by moving it and playing the appropriate animations.
     * If the puffer fish is hit, it plays the "dead" animation; otherwise, it plays the "swimming" animation.
     */
    animate() {
        this.moveLeft();
        this.moveUp(0);
        setInterval(() => {
            if (this.getHit) {
                this.playAnimation(this.ImagesDead);
            } else {
                this.playAnimation(this.ImagesSwimming);
            }
        }, 200);
    }
}
