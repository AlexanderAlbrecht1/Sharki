
class Bubble extends movableObject {

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
            if (this.otherDirection) {
                this.x -= this.speed;
            } else {
                this.x += this.speed;
            }
        }, 1000 / 60);
    }
}
