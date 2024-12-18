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
        this.x = 10;
        this.y = 50;
        this.width = 48;
        this.height = 64;
    }
}
