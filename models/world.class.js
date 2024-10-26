class World {
    character = new Character();
    enemies = [
        new pufferFish(),
        new pufferFish(),
        new pufferFish(),
        new JellyFish(),
        new JellyFish(),
    ];

    backgroundObjects = [
        
        new BackgroundObjects('img/3. Background/Layers/3.Fondo 1/D1.png', 0, 0),
        new BackgroundObjects('img/3. Background/Layers/4.Fondo 2/D.png', 0, 0),
        new BackgroundObjects('img/3. Background/Layers/2. Floor/D1.png', 0, 0),
    ];

    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }


    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }

    addToMap(object) {
        this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);
    }

    draw() {
        //clear canvas!
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjectsToMap(this.backgroundObjects)
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies)

        // repeat drawing as often as possible
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }


}
