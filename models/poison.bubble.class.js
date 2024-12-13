/**
 * Represents a poisonous bubble that can move across the screen.
 * Inherits from the `movableObject` class.
 */
class PoisonBubble extends movableObject {

    /**
     * Creates a new PoisonBubble instance.
     * 
     * @param {number} x - The initial x-coordinate of the bubble.
     * @param {number} y - The initial y-coordinate of the bubble.
     */
    constructor(x, y) {
        super().loadImage('./img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png');
        
        /** @type {number} The x-coordinate of the bubble. */
        this.x = x;

        /** @type {number} The y-coordinate of the bubble. */
        this.y = y;

        /** @type {number} The speed at which the bubble moves. */
        this.speed = 2;

        /** @type {number} The width of the bubble. */
        this.width = 50;

        /** @type {number} The height of the bubble. */
        this.height = 50;

        this.moveRight();
    }

    /**
     * Moves the bubble to the left at a constant speed.
     * Updates the x-coordinate of the bubble in regular intervals.
     */
    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60); // 60 frames per second
    }

    /**
     * Moves the bubble to the right at a constant speed.
     * Updates the x-coordinate of the bubble in regular intervals.
     */
    moveRight() {
        setInterval(() => {
            this.x += this.speed;
        }, 1000 / 60); // 60 frames per second
    }
}
