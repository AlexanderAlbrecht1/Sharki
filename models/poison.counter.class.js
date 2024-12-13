/**
 * Represents a poison counter displayed as a drawable object on the screen.
 * The poison counter tracks the number of poison items collected or used.
 * Inherits from the `DrawableObject` class.
 */
class PoisonCounter extends DrawableObject {

    /**
     * Creates a new PoisonCounter instance.
     * Sets the position, size, and image for the poison counter.
     */
    constructor() {
        super().loadImage('./img/4. Marcadores/Posión/Animada/1.png');

        /** @type {number} The x-coordinate of the poison counter. */
        this.x = 10;

        /** @type {number} The y-coordinate of the poison counter. */
        this.y = 50;

        /** @type {number} The width of the poison counter. */
        this.width = 48;

        /** @type {number} The height of the poison counter. */
        this.height = 64;
    }
}
