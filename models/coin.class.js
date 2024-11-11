class Coin extends DrawableObject {
 
    constructor() {
        super().loadImage('./img/4. Marcadores/1. Coins/1.png');
        this.x = 400 + Math.random() * 2200;
        this.y = Math.random() * 400
        this.width = 32;
        this.height = 32;
    }
}