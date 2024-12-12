/**
 * Represents a Bubble object that moves to the right and can be animated.
 * Inherits from the `movableObject` class.
 */
class Bubble extends movableObject {

    /**
     * Creates a new Bubble object.
     * @param {number} x 
     * @param {number} y 
     */
    constructor(x, y) {
        super().loadImage('./img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = x;
        this.y = y;
        this.speed = 2;  
        this.width = 40; 
        this.height = 40; 
        
        this.moveRight();
    }

    /**
     * Moves the Bubble object continuously to the right.
     * Called every frame using setInterval.
     * @private
     */
    moveRight() {
        setInterval(() => {
            this.x += this.speed; 
        }, 1000 / 60); 
    }

    /**
     * Animates the Bubble object based on keyboard input.
     * When the 'Q' key is pressed, a new Bubble object is created at a fixed position.
     * @private
     */
    animate() {
        setInterval(() => {
            if (this.world.keyboard.Q) {
                new Bubble(200, 200); 
                this.x += this.speed; 
            }
        }, 1000 / 60); 
    }
}
