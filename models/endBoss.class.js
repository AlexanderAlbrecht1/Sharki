
class Endboss extends movableObject {

    hadFirstContact = false;
    getHurt = false;
    offsetLeft = 10;
    offsetRight = 0;
    offsetTop = 125;
    offsetBottom = 75;

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
        './img/2.Enemy/3 Final Enemy/2.floating/13.png'
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
        'img/2.Enemy/3 Final Enemy/1.Introduce/10.png'
    ];

    ImagesHurt = [
        './img/2.Enemy/3 Final Enemy/Hurt/1.png',
        './img/2.Enemy/3 Final Enemy/Hurt/2.png',
        './img/2.Enemy/3 Final Enemy/Hurt/3.png',
        './img/2.Enemy/3 Final Enemy/Hurt/4.png'
    ];

    ImagesDead = [
        './img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        './img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        './img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        './img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        './img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png'
    ];

    ImagesAttack = [
        './img/2.Enemy/3 Final Enemy/Attack/1.png',
        './img/2.Enemy/3 Final Enemy/Attack/2.png',
        './img/2.Enemy/3 Final Enemy/Attack/3.png',
        './img/2.Enemy/3 Final Enemy/Attack/4.png',
        './img/2.Enemy/3 Final Enemy/Attack/5.png',
        './img/2.Enemy/3 Final Enemy/Attack/6.png'
    ];

    constructor(id) {
        super();
        this.loadImages(this.ImagesFloating);
        this.loadImages(this.ImagesArise);
        this.loadImages(this.ImagesHurt);
        this.loadImages(this.ImagesDead);
        this.loadImages(this.ImagesAttack);
        this.id = id;
        this.x = 2400;
        this.y = -1;
        this.width = 400;
        this.height = 400;
        this.dead = true;
        this.animate();
        this.endbossAttack();
        this.endbossAppears();
        this.endbossDies();
    }

    /**
     * Animates the Endboss by cycling through its states and animations.
     * Manages the timing and conditions for attacks, getting hurt, and dying.
     */
    animate() {
        let i = 0; 
        let d = 0; 
        setInterval(() => {
            if (gameOn) {
                if (this.hadFirstContact) {
                    this.playAnimation(this.ImagesFloating);
                    if (this.getHurt) {
                        bossHurtSound.play();
                        this.playAnimation(this.ImagesHurt);
                    }
                    else if (this.energy === 0) {
                        this.endbossDies(d);
                        d++;
                    }
                }
                else if (world.character.x > 2000 && !this.hadFirstContact) {
                    this.dead = false;
                    this.endbossAppears(i);
                    i++;
                } 
            }
        }, 200);
        this.endbossAttack();
    }

    /**
     * Handles the Endboss appearance animation and state management.
     * @param {number} i - Counter for animation frames.
     */
    endbossAppears(i) {
        if (i < 10) {
            this.playAnimation(this.ImagesArise);
            endbossSpanSound.play();
            this.hadFirstContact = true;
        } else {
            this.playAnimation(this.ImagesFloating)
        }
    }

    /**
     * Initiates the Endboss attack sequence, playing the attack animation
     * and temporarily changing the position of the Endboss.
     */
    endbossAttack() {
        setInterval(() => {
            if (gameOn && world.character.x > 2000 && this.hadFirstContact) {
                endbossAttackSound.play();
                this.x -= 100;
                this.playAnimation(this.ImagesAttack);
                setTimeout(() => {
                    this.x += 100;
                }, 1000);
            }
        }, 3000);
    }

    /**
     * Manages the "dying" animation and triggers the win condition.
     * @param {number} d - Counter for animation frames.
     */
    endbossDies(d) {
        if (d < 5) {
            this.playAnimation(this.ImagesDead);
        }
        if (d === 4) {
            youWin();
        }
    }
}
