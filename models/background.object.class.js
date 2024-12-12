/**
 * Represents a background object in the game.
 * These objects form the visual background of the game and do not interact with other game elements.
 * Inherits from the `movableObject` class.
 */
class BackgroundObjects extends movableObject {
    /**
     * The width of the background object.
     * @type {number}
     */
    width = 720;

    /**
     * The height of the background object.
     * @type {number}
     */
    height = 480;

    /**
     * Creates a new background object with a specified image and position.
     * @param {string} imagePath - The file path to the background image.
     * @param {number} x - The horizontal position of the background object.
     */
    constructor(imagePath, x) {
        super().loadImage(imagePath);

        /**
         * The horizontal position of the background object.
         * @type {number}
         */
        this.x = x;

        /**
         * The vertical position of the background object, 
         * calculated so that it aligns with the bottom of the game canvas.
         * @type {number}
         */
        this.y = 480 - this.height;
    }
}
