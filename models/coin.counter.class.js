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
        super().loadImage('./img/4. Marcadores/1. Coins/1.png'); 
        this.x = 18;
        this.y = 120;
        this.width = 32;
        this.height = 32;
    }
}
