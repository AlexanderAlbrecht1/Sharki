class Poison extends DrawableObject {

    pickUpSound = new Audio('./audio/poison_pickUp.mp3')

    constructor(x,y,id) {
        super().loadImage('./img/4. Marcadores/Posión/Animada/1.png');
        this.width = 48;
        this.height = 64;
        this.id = id;
        this.x = x;
        this.y = y;
    }

}