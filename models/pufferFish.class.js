/**
 * Represents a puffer fish enemy in the game.
 * The puffer fish can swim, animate, and respond to hits by transitioning to a "dead" state.
 * Inherits from the `movableObject` class.
 */
class pufferFish extends movableObject {

    /**
     * Array of image paths for the swimming animation of the puffer fish.
     * @type {string[]}
     */
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

    /**
     * Array of image paths for the "dead" animation of the puffer fish.
     * @type {string[]}
     */
    ImagesDead = [
        './img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png',
        './img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 2 (can animate by going down to the floor after the Fin Slap attack).png',
        './img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 3 (can animate by going down to the floor after the Fin Slap attack).png',
    ];

    /**
     * Creates a new pufferFish instance.
     * 
     * @param {number} x - The initial x-coordinate of the puffer fish.
     * @param {number|string} id - The unique identifier for the puffer fish.
     */
    constructor(x, id) {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png');
        this.loadImages(this.ImagesSwimming);
        this.loadImages(this.ImagesDead);

        /** @type {number} The x-coordinate of the puffer fish. */
        this.x = x;

        /** @type {number} The y-coordinate of the puffer fish. */
        this.y = 10 + Math.random() * 400;

        /** @type {number} The width of the puffer fish. */
        this.width = 50;

        /** @type {number} The height of the puffer fish. */
        this.height = 50;

        /** @type {number|string} The unique identifier for the puffer fish. */
        this.id = id;

        /** @type {boolean} Indicates if the puffer fish is dead. */
        this.dead = false;

        /** @type {boolean} Indicates if the puffer fish has been hit. */
        this.getHit = false;

        /** @type {number} The horizontal speed of the puffer fish. */
        this.speed = 0.1 + Math.random() * 0.1;

        /** @type {number} The vertical speed of the puffer fish. */
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
