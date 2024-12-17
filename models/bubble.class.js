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
    constructor(x, y, id) {
        super().loadImage('./img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = x;
        this.y = y;
        this.id = id;
        this.speed = 2;  
        this.width = 40; 
        this.height = 40; 
        
        this.move();
    }

    /**
     * Moves the Bubble object continuously to the right.
     * Called every frame using setInterval.
     * @private
     */
    move() {
        setInterval(() => {
            if(world.bubbleTrap) {
                world.bubbleTrap.forEach(bubble => {
                    if (bubble.otherDirection) {
                        bubble.x -= bubble.speed; 
                    } else {
                        bubble.x += bubble.speed;
                    }
                });
            } 
        }, 1000 / 60); 
    }
}
