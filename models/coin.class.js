
class Coin extends DrawableObject {

    constructor(x, y, id) {
        super().loadImage('./img/4. Marcadores/1. Coins/1.png');
        this.width = 32;
        this.height = 32;
        this.id = id;
        this.x = x;
        this.y = y;
    }
}
