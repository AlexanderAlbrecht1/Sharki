class Poison extends DrawableObject {

    constructor(x,y,id) {
        super().loadImage('./img/4. Marcadores/Posión/Animada/1.png');
        this.width = 48;
        this.height = 64;
        this.id = id;
        this.x = x;
        this.y = y;
    }

}