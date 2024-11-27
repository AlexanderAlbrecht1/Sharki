class Endboss extends movableObject {

    hadFirstContact = false;


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
        super().loadImage('');
        this.loadImages(this.ImagesFloating);
        this.loadImages(this.ImagesArise);
        this.x = 2400;
        this.y = -1;
        this.width = 400;
        this.height = 400;
        this.hadFirstContact = false;

        this.animate();

        // this.applyGravity(0);

    }

    animate() {
        let i = 0;
        // setInterval(() => {

        //     if (i < 10) {
        //         this.playAnimation(this.ImagesArise)
        //     } else {
        //         this.playAnimation(this.ImagesFloating)
        //     }
        //     i++;

        //     if (world.character.x > 2000 && !this.hadFirstContact) {
        //         i = 0;
        //         this.hadFirstContact = true;
        //     }
        // }, 150);

        setInterval(() => {
            if (world.character.x > 2100) {
                console.log('Sharkie' + world.character.x);
                if (i < 10) {
                    this.playAnimation(this.ImagesArise)
                } else {
                    this.playAnimation(this.ImagesFloating)
                }
                i++;

            }
        }, 200)
    }


}