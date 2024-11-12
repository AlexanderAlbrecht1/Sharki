class Poison extends DrawableObject {

    pickUpSound = new Audio('./audio/poison_pickUp.mp3')

    constructor(id) {
        super().loadImage('./img/4. Marcadores/Posión/Animada/1.png');
        this.x = 400 + Math.random() * 2200;
        this.y = 350;
        this.width = 48;
        this.height = 64;
        this.id = id;
    }

}