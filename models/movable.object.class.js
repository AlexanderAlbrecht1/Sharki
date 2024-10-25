class movableObject {
    x = 120;
    y = 250;
    img;
    height = 150;
    width = 150;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveLeft() {
        console.log('moving left');
        
    }

}