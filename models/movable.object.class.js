class movableObject {
    x = 120;
    y = 400;
    img;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log('moving right');
    };

    moveUp() {

    }

    moveDown() {

    }

    moveLeft() {
        console.log('moving left');
        
    }

}