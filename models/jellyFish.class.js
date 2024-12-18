/**
 * Represents a jellyfish enemy in the game.
 * The jellyfish can swim, shock, and appear dead depending on the game state.
 * Inherits from the `movableObject` class.
 */
class JellyFish extends movableObject {
    /**
     * @type {number} Offset from the left for collision detection.
     */
    offsetLeft = 5;
    offsetRight = 15;
    offsetTop = 10;
    offsetBottom = 20;

    ImagesSwimming = [
        './img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        './img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        './img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        './img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',
    ];

    ImagesShocking = [
        './img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
        './img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
        './img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
        './img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png',
    ];

    ImagesDead = [
        './img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png',
        './img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png',
        './img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png',
        './img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png',
    ];

    /**
     * Creates a new JellyFish instance.
     * 
     * @param {number} x - The initial x-coordinate of the jellyfish.
     * @param {number} y - The initial y-coordinate of the jellyfish.
     * @param {number|string} id - The unique identifier for the jellyfish.
     */
    constructor(x, y, id) {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImages(this.ImagesSwimming);
        this.loadImages(this.ImagesShocking);
        this.loadImages(this.ImagesDead);

        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 80;
        this.id = id;
        this.trapped = false;
        this.isShocking = false;
        this.speed_Y = 0.09 + Math.random() * 0.2;

        this.animate();
    }

    /**
     * Animates the jellyfish by cycling through its image states.
     * The animation changes based on whether the jellyfish is shocking, trapped, or swimming.
     */
    animate() {
        this.moveUp();
        setInterval(() => {
            if (this.isShocking) {
                this.playAnimation(this.ImagesShocking);
            } else if (this.trapped) {
                this.playAnimation(this.ImagesDead);
            } else {
                this.playAnimation(this.ImagesSwimming);
            }
        }, 300);
    }
}
