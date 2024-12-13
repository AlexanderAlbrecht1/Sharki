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

    /**
     * @type {number} Offset from the right for collision detection.
     */
    offsetRight = 15;

    /**
     * @type {number} Offset from the top for collision detection.
     */
    offsetTop = 10;

    /**
     * @type {number} Offset from the bottom for collision detection.
     */
    offsetBottom = 20;

    /**
     * @type {string[]} Array of image paths for the jellyfish swimming animation.
     */
    ImagesSwimming = [
        './img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        './img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        './img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        './img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',
    ];

    /**
     * @type {string[]} Array of image paths for the jellyfish shocking animation.
     */
    ImagesShocking = [
        './img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
        './img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
        './img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
        './img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png',
    ];

    /**
     * @type {string[]} Array of image paths for the jellyfish dead animation.
     */
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

        /** @type {number} The x-coordinate of the jellyfish. */
        this.x = x;

        /** @type {number} The y-coordinate of the jellyfish. */
        this.y = y;

        /** @type {number} The width of the jellyfish. */
        this.width = 50;

        /** @type {number} The height of the jellyfish. */
        this.height = 80;

        /** @type {number|string} The unique identifier of the jellyfish. */
        this.id = id;

        /** @type {boolean} Indicates whether the jellyfish is trapped. */
        this.trapped = false;

        /** @type {boolean} Indicates whether the jellyfish is in a shocking state. */
        this.isShocking = false;

        /** @type {number} The vertical speed of the jellyfish. */
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
