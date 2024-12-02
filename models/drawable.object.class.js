class DrawableObject {
    x = 120;
    y = 250;
    height = 200;
    width = 200;
    img;
    imageCache = {};
    currentImage = 0;

    offsetLeft = 0;
    offsetRight = 0;
    offsetTop = 0;
    offsetBottom = 0;

    dead = false;

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

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof pufferFish || this instanceof JellyFish || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'green';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    drawFrameoffset(ctx) {
        if (this instanceof Character || this instanceof pufferFish || this instanceof JellyFish|| this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '1';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x+this.offsetLeft, this.y+this.offsetTop,this.width-this.offsetRight, this.height-this.offsetBottom);
            ctx.stroke();
        }

    }
   
}