/**
 * Represents a poison object in the game that can be collected.
 * Inherits from the `DrawableObject` class.
 */
class Poison extends DrawableObject {

    /**
     * Creates a new Poison instance.
     * 
     * @param {number} x - The x-coordinate of the poison object.
     * @param {number} y - The y-coordinate of the poison object.
     * @param {number|string} id - The unique identifier for the poison object.
     */
    constructor(x, y, id) {
        super().loadImage('./img/4. Marcadores/Posión/Animada/1.png');

        /** @type {number} The width of the poison object. */
        this.width = 48;

        /** @type {number} The height of the poison object. */
        this.height = 64;

        /** @type {number|string} The unique identifier for the poison object. */
        this.id = id;

        /** @type {number} The x-coordinate of the poison object. */
        this.x = x;

        /** @type {number} The y-coordinate of the poison object. */
        this.y = y;
    }
}
