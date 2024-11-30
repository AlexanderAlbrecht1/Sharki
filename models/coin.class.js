class Coin extends DrawableObject {

    pickUpSound = new Audio('./audio/coin-pickUp.mp3')

    constructor(x,y,id) {
        super().loadImage('./img/4. Marcadores/1. Coins/1.png');
        this.x = 400 + Math.random() * 2200;
        this.y = Math.random() * 400
        this.width = 32;
        this.height = 32;
        this.id = id;
        this.x = x;
        this.y = y;
    }

}
