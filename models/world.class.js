class World {
    character = new Character();
    enemies = [
        new pufferFish(),
        new pufferFish(),
        new pufferFish(),
        new JellyFish(),
        new JellyFish(),
    ];
    water = [
        new Water(),
    ];
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }





    draw() {
        //clear canvas!
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        //draws water background
        this.water.forEach(w => {
            this.ctx.drawImage(w.img, w.x, w.y, w.width, w.height);
        });

        //draws sharki
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);

        //draws enemies
        this.enemies.forEach(enemy => {
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
        });


        // repeat drawing as often as possible
        let self = this;
        requestAnimationFrame(function(){
            self.draw();
        });
    }
}