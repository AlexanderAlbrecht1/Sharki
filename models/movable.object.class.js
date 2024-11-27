class movableObject extends DrawableObject {    
    speed = 0.3;
    otherDirection = false;

    speed_Y = 0;
    accerlation = .75;

    offsetY = 0;

    energy = 100;

    lastHit = 0;

    // isDead = false;

    applyGravity() {
        setInterval(() => {
            if (this.isABoveStopLine()) {
                this.y -= this.speed_Y;
                this.speed_Y -= this.accerlation;
            }
        }, 1000 / 25)
    }

    isABoveStopLine() {
        return this.y < 0
    }

    // Bessere Formel zur Kollisionsberechnung (Genauer)
    isColliding(obj) {
        return (this.x + this.width) >= obj.x && this.x <= (obj.x + obj.width) &&
            (this.y + this.offsetY + this.height) >= obj.y &&
            (this.y + this.offsetY) <= (obj.y + obj.height) //&&
        obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.

    }


    //move from right to left
    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
            if(this.x < -720) {
                this.x = 2600;
                this.y = (10 + Math.random() * 400);
            }
        }, 1000 / 60)
    }

    moveUp() {
        setInterval(() => {
            this.y -= this.speed_Y;
            if (this.y < -90) {
                this.y = 480;
                // this.x = (500 + Math.random() * 2000);
            };
        }, 1000 / 60)
    }

    moveDown() {
        setInterval(() => {
            this.y += this.speed;
        }, 1000 / 60)
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++
    }

    damage(x) {
        this.energy -= x;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 3;
    }

    isDead() {
        return this.energy == 0;
    }


}