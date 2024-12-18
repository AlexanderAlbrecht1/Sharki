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
        this.width = 48;
        this.height = 64;
        this.id = id;
        this.x = x;
        this.y = y;
    }
}
