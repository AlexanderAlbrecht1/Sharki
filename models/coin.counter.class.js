/**
 * Represents a coin counter displayed as a drawable object on the screen.
 * Inherits properties and methods from the DrawableObject class.
 */
class CoinCounter extends DrawableObject {

    /**
     * Initializes a new instance of the CoinCounter class.
     * Sets the position, size, and image for the coin counter.
     */
    constructor() {
        super().loadImage('./img/4. Marcadores/1. Coins/1.png'); // Load the coin image
        /** @type {number} The x-coordinate of the coin counter. */
        this.x = 18;
        /** @type {number} The y-coordinate of the coin counter. */
        this.y = 120;
        /** @type {number} The width of the coin counter. */
        this.width = 32;
        /** @type {number} The height of the coin counter. */
        this.height = 32;
    }
}
