
class movableObject extends DrawableObject {    

    speed = 0.3;
    otherDirection = false;
    speed_Y = 0;
    accerlation = 0.75;
    energy = 100;
    lastHit = 0;

    /**
     * Applies gravity to the object, causing it to fall or stop based on its position.
     */
    applyGravity() {
        setInterval(() => {
            if (this.isABoveStopLine()) {
                this.y -= this.speed_Y;
                this.speed_Y -= this.accerlation;
            }
        }, 1000 / 25);
    }

    /**
     * Checks if the object is above the stop line (y-coordinate < 0).
     * @returns {boolean} True if the object is above the stop line, false otherwise.
     */
    isABoveStopLine() {
        return this.y < 0;
    }

    /**
     * Checks if this object is colliding with another object.
     * @param {movableObject} obj - The other object to check collision against.
     * @returns {boolean} True if the objects are colliding, false otherwise.
     */
    isColliding(obj) {
        return this.x + this.height - this.offsetLeft > obj.x + obj.offsetRight &&
            this.y + this.width - this.offsetLeft > obj.y + obj.offsetTop &&
            this.x + this.offsetLeft < obj.x + obj.width - obj.offsetRight &&
            this.y + this.offsetTop < obj.y + obj.height - obj.offsetBottom;
    }

    /**
     * Moves the object to the left at a constant speed.
     */
    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

    /**
     * Moves the object upward at a constant speed, with a wrap-around effect if above a threshold.
     */
    moveUp() {
        setInterval(() => {
            this.y -= this.speed_Y;
            if (this.y < -90 && this.dead == false) {
                this.y = 480;
            }
        }, 1000 / 60);
    }

    /**
     * Moves the object downward at a constant speed.
     */
    moveDown() {
        setInterval(() => {
            this.y += this.speed;
        }, 1000 / 60);
    }

    /**
     * Plays an animation sequence by cycling through an array of image paths.
     * @param {string[]} images - The array of image paths for the animation.
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * Reduces the object's energy by a specified amount, setting it to zero if the result is negative.
     * Updates the last hit timestamp if the object takes damage.
     * @param {number} x - The amount of damage to apply.
     */
    damage(x) {
        this.energy -= x;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Determines if the object is currently in a "hurt" state, based on the time elapsed since the last hit.
     * @returns {boolean} True if the object is hurt, false otherwise.
     */
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 3;
    }

    /**
     * Checks if the object is dead (energy is 0).
     * @returns {boolean} True if the object is dead, false otherwise.
     */
    isDead() {
        return this.energy == 0;
    }
}
