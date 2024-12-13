/**
 * Represents a status bar displaying energy or health in the game.
 * The status bar dynamically updates its appearance based on the current percentage.
 * Inherits from the `DrawableObject` class.
 */
class StatusBar extends DrawableObject {

    /**
     * Array of image paths representing different energy levels for the status bar.
     * @type {string[]}
     */
    ImagesEnergy = [
        './img/4. Marcadores/orange/0_  copia.png',
        './img/4. Marcadores/orange/20_ copia 2.png',
        './img/4. Marcadores/orange/40_  copia.png',
        './img/4. Marcadores/orange/60_  copia.png',
        './img/4. Marcadores/orange/80_  copia.png',
        './img/4. Marcadores/orange/100_  copia.png',
    ];

    /**
     * The current percentage of energy/health displayed on the status bar.
     * @type {number}
     */
    percentage = 100;

    /**
     * Creates a new StatusBar instance.
     * Initializes the position, size, and default percentage for the status bar.
     */
    constructor() {
        super();
        this.loadImages(this.ImagesEnergy);

        /** @type {number} The x-coordinate of the status bar. */
        this.x = 10;

        /** @type {number} The y-coordinate of the status bar. */
        this.y = 0;

        /** @type {number} The width of the status bar. */
        this.width = 200;

        /** @type {number} The height of the status bar. */
        this.height = 60;

        this.setPercentage(100);
    }

    /**
     * Updates the status bar's percentage and updates the displayed image accordingly.
     * 
     * @param {number} percentage - The current energy/health percentage (0-100).
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.ImagesEnergy[this.getImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Determines the appropriate image index based on the current percentage.
     * 
     * @returns {number} The index of the image corresponding to the current percentage.
     */
    getImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage >= 20) {
            return 1;
        } else if (this.percentage < 20) {
            return 0;
        }
    }
}
