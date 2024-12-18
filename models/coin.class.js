/**
 * Represents a coin in the game.
 * Coins are collectible objects that can appear at random or fixed positions on the game map.
 * Inherits from the `DrawableObject` class.
 */
class Coin extends DrawableObject {
    /**
     * Creates a new coin instance with a specified position and unique identifier.
     * @param {number} x - The horizontal position of the coin.
     * @param {number} y - The vertical position of the coin.
     * @param {number} id - The unique identifier for this coin.
     */
    constructor(x, y, id) {
        super().loadImage('./img/4. Marcadores/1. Coins/1.png');
        this.width = 32;
        this.height = 32;
        this.id = id;
        this.x = x;
        this.y = y;
    }
}
