class Endboss extends movableObject {
    ImagesFloating = [
        './img/2.Enemy/3 Final Enemy/2.floating/1.png',
        './img/2.Enemy/3 Final Enemy/2.floating/2.png',
        './img/2.Enemy/3 Final Enemy/2.floating/3.png',
        './img/2.Enemy/3 Final Enemy/2.floating/4.png',
        './img/2.Enemy/3 Final Enemy/2.floating/5.png',
        './img/2.Enemy/3 Final Enemy/2.floating/6.png',
        './img/2.Enemy/3 Final Enemy/2.floating/7.png',
        './img/2.Enemy/3 Final Enemy/2.floating/8.png',
        './img/2.Enemy/3 Final Enemy/2.floating/9.png',
        './img/2.Enemy/3 Final Enemy/2.floating/10.png',
        './img/2.Enemy/3 Final Enemy/2.floating/11.png',
        './img/2.Enemy/3 Final Enemy/2.floating/12.png',
        './img/2.Enemy/3 Final Enemy/2.floating/13.png',
    ];

    ImagesArise = [
        'img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/10.png',
    ]

    constructor() {
        super().loadImage('./img/2.Enemy/3 Final Enemy/2.floating/1.png');
        this.loadImages(this.ImagesFloating);
        this.loadImages(this.ImagesArise);
        this.x = 2600;
        this.y = -1;
        this.width = 400;
        this.height = 400;

        this.animate();
        // this.arise();
        // this.applyGravity(0);

    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.ImagesFloating);
        }, 200);

        // setInterval(() => {
            this.playAnimation(this.ImagesArise);
        // }, 200)
    }

    arise() {
        // if (world.character.x === 700) {
            setInterval(() => {
                this.playAnimation(this.ImagesArise);
            }, 200)
        // }
    }
}