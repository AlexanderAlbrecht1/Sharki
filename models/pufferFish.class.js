class pufferFish extends movableObject {
    constructor(imagePath) {
        super().loadImage(imagePath)
        this.x = 220 + Math.random() * 500;
        this.y = Math.random() * 400
        this.width = 50;
        this.height = 50;
        this.animate();
    }

    animate() {
        setInterval( () => {
            this.x -= .3;
        }, 1000/60)
    }

}