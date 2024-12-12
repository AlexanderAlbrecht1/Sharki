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

        /**
         * The horizontal position of the coin.
         * Randomly initialized within a range, but overridden by the provided `x` parameter.
         * @type {number}
         */
        this.x = 400 + Math.random() * 2200;

        /**
         * The vertical position of the coin.
         * Randomly initialized within a range, but overridden by the provided `y` parameter.
         * @type {number}
         */
        this.y = Math.random() * 400;

        /**
         * The width of the coin.
         * @type {number}
         */
        this.width = 32;

        /**
         * The height of the coin.
         * @type {number}
         */
        this.height = 32;

        /**
         * The unique identifier for this coin instance.
         * @type {number}
         */
        this.id = id;

        // Overwrite the random position with the provided `x` and `y` values.
        this.x = x;
        this.y = y;
    }
}
