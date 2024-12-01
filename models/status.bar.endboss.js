class StatusBarBoss extends DrawableObject {

    ImagesEnergy = [
        './img/4. Marcadores/green/Life/0_  copia 3.png',
        './img/4. Marcadores/green/Life/20_ copia 4.png',
        './img/4. Marcadores/green/Life/40_  copia 3.png',
        './img/4. Marcadores/green/Life/60_  copia 3.png',
        './img/4. Marcadores/green/Life/80_  copia 3.png',
        './img/4. Marcadores/green/Life/100_  copia 2.png',
    ]

    percentageBoss = 100;

    constructor() {
        super();
        this.loadImages(this.ImagesEnergy);
        this.x = 500;
        this.y = 0;
        this.width = 200;
        this.height = 60;
        this.setPercentage(100);
    }

    setPercentage(percentageBoss) {
        this.percentageBoss = percentageBoss;
        let path = this.ImagesEnergy[this.getImageIndex()];
        this.img = this.imageCache[path];

    }

    getImageIndex() {
        if(this.percentageBoss == 100) {
            return 5;
        }       
        else if (this.percentageBoss > 80) {
            return 4;
        }
        else if (this.percentageBoss > 60) {
            return 3;
        }
        else if (this.percentageBoss > 40) {
            return 2;
        }
        else if (this.percentageBoss >= 20) {
            return 1;
        }
        else if (this.percentageBoss < 20) {
            return 0;
        }
    }
}