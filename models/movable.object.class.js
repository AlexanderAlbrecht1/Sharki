class movableObject {
    x = 120;
    y = 250;
    img;
    height = 150;
    width = 150;
    imageCache = {};
    speed = 0.3; 
    otherDirection = false;

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
        setInterval( () => {
            // if (this.x >= -50) {
                this.x -= this.speed;
            // } else {
            //     this.x = 720;
            //     this.y = Math.random() * 400;
            // };
        }, 1000/60)
    }

}