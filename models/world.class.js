class World {
    character = new Character();
    enemies = [
        new pufferFish('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'),
        new pufferFish('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'),
        new pufferFish('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png'),
        new pufferFish('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png'),
        new JellyFish(),
        new JellyFish(),
    ];

    backgroundObjects = [ 
        new BackgroundObjects('img/3. Background/Layers/5. Water/D1.png', 0),
        new BackgroundObjects('img/3. Background/Layers/3.Fondo 1/D1.png', 0),
        new BackgroundObjects('img/3. Background/Layers/4.Fondo 2/D1.png', 0),
        new BackgroundObjects('img/3. Background/Layers/2. Floor/D1.png', 0),
        new BackgroundObjects('img/3. Background/Layers/1. Light/1.png', 0),
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
