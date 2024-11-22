class PoisonBubble extends movableObject {

    constructor(x,y) {
        super().loadImage('./img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png');
        this.x = x;
        this.y = y;
        this.speed = 2;
        this.width = 50;
        this.height = 50;
        
        // this.moveLeft();
        this.moveRight();
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
            // if(this.x < -720) {
            //     this.x = 2600;
            //     this.y = (10 + Math.random() * 400);
            // }
        }, 1000 / 60)
    }

    moveRight() {
        setInterval(() => {
            // if (world.keyboard.Q) {
            //     new Bubble(200,200);
                this.x += this.speed;
            // }
        }, 1000/60)
    }

}