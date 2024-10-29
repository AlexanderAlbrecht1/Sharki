class World {
    character = new Character();
    enemies = [
        new pufferFish(),
        new pufferFish(),
        new JellyFish(),
        new pufferFish(),
        new pufferFish(),
        new JellyFish(),
    ];

    backgroundObjects = [ 
        new BackgroundObjects('img/3. Background/Layers/5. Water/D2.png', -720),
        new BackgroundObjects('img/3. Background/Layers/3.Fondo 1/D2.png', -720),
        new BackgroundObjects('img/3. Background/Layers/4.Fondo 2/D2.png', -720),
        new BackgroundObjects('img/3. Background/Layers/2. Floor/D2.png', -720),
        new BackgroundObjects('img/3. Background/Layers/1. Light/1.png', -720),
        new BackgroundObjects('img/3. Background/Layers/5. Water/D1.png', 0),
        new BackgroundObjects('img/3. Background/Layers/3.Fondo 1/D1.png', 0),
        new BackgroundObjects('img/3. Background/Layers/4.Fondo 2/D1.png', 0),
        new BackgroundObjects('img/3. Background/Layers/2. Floor/D1.png', 0),
        new BackgroundObjects('img/3. Background/Layers/1. Light/1.png', 0),
        new BackgroundObjects('img/3. Background/Layers/5. Water/D2.png', 720),
        new BackgroundObjects('img/3. Background/Layers/3.Fondo 1/D2.png', 720),
        new BackgroundObjects('img/3. Background/Layers/4.Fondo 2/D2.png', 720),
        new BackgroundObjects('img/3. Background/Layers/2. Floor/D2.png', 720),
        new BackgroundObjects('img/3. Background/Layers/1. Light/2.png', 720),
        new BackgroundObjects('img/3. Background/Layers/5. Water/D1.png', 1440),
        new BackgroundObjects('img/3. Background/Layers/3.Fondo 1/D1.png', 1440),
        new BackgroundObjects('img/3. Background/Layers/4.Fondo 2/D1.png', 1440),
        new BackgroundObjects('img/3. Background/Layers/2. Floor/D1.png', 1440),
        new BackgroundObjects('img/3. Background/Layers/1. Light/2.png', 1440),
        new BackgroundObjects('img/3. Background/Layers/5. Water/D2.png', 2160),
        new BackgroundObjects('img/3. Background/Layers/3.Fondo 1/D2.png', 2160),
        new BackgroundObjects('img/3. Background/Layers/4.Fondo 2/D2.png', 2160),
        new BackgroundObjects('img/3. Background/Layers/2. Floor/D2.png', 2160),
        new BackgroundObjects('img/3. Background/Layers/1. Light/2.png', 2160),
    ];

    canvas;
    ctx;
    keyboard;
    cameraX = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld(){
        this.character.world = this;
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }

    addToMap(object) {
        if (object.otherDirection) {
            this.ctx.save();
            this.ctx.translate(object.width, 0);
            this.ctx.scale(-1,1);
            object.x = object.x * -1;
        }
        this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);
        if (object.otherDirection) {
            object.x = object.x * -1;
            this.ctx.restore();
        }
    }

    draw() {
        //clear canvas!
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.cameraX,0);

        this.addObjectsToMap(this.backgroundObjects)
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies)

        this.ctx.translate(-this.cameraX,0);

        // repeat drawing as often as possible
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }


}
