class movableObject {
    x = 120;
    y = 250;
    img;
    height = 150;
    width = 150;
    imageCache = {};
    speed = 0.3;
    otherDirection = false;

    speed_Y = 0;
    accerlation = .75;

    applyGravity() {
        setInterval(() => {
            if(this.isABoveStopLine()) {
                this.y -= this.speed_Y;
                this.speed_Y -= this.accerlation;
            }
        }, 1000/25)
    }

    isABoveStopLine() {
        return this.y < 0
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    //move from right to left
    moveLeft() {
        setInterval(() => {
            // if (this.x >= -50) {
            this.x -= this.speed;
            // } else {
            //     this.x = 720;
            //     this.y = Math.random() * 400;
            // };
        }, 1000 / 60)
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++
    }

}