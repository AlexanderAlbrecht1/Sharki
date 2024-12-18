
class PoisonBubble extends movableObject {

    constructor(x, y, id) {
        super().loadImage('./img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png');
        this.x = x;
        this.y = y;
        this.id = id;
        this.speed = 2;
        this.width = 50;
        this.height = 50;

        this.moveRight();
    }

    /**
     * Moves the bubble to the left at a constant speed.
     * Updates the x-coordinate of the bubble in regular intervals.
     */
    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

    /**
     * Moves the bubble to the right at a constant speed.
     * Updates the x-coordinate of the bubble in regular intervals.
     */
    moveRight() {
        setInterval(() => {
            this.x += this.speed;
        }, 1000 / 60); 
    }
}
