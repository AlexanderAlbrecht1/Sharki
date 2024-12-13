/**
 * Represents the Endboss character in the game, inheriting from `movableObject`.
 * This class handles animations, attack logic, and state management for the Endboss.
 */
class Endboss extends movableObject {

    /**
     * Indicates whether the Endboss has had its first interaction with the player.
     * @type {boolean}
     */
    hadFirstContact = false;

    /**
     * Indicates whether the Endboss is in a "hurt" state.
     * @type {boolean}
     */
    getHurt = false;

    /**
     * The left offset of the Endboss for collision detection.
     * @type {number}
     */
    offsetLeft = 10;

    /**
     * The right offset of the Endboss for collision detection.
     * @type {number}
     */
    offsetRight = 0;

    /**
     * The top offset of the Endboss for collision detection.
     * @type {number}
     */
    offsetTop = 125;

    /**
     * The bottom offset of the Endboss for collision detection.
     * @type {number}
     */
    offsetBottom = 75;

    /**
     * Image paths for the "floating" animation.
     * @type {string[]}
     */
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

    /**
     * Image paths for the "arise" animation.
     * @type {string[]}
     */
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

    /**
     * Image paths for the "hurt" animation.
     * @type {string[]}
     */
    ImagesHurt = [
        './img/2.Enemy/3 Final Enemy/Hurt/1.png',
        './img/2.Enemy/3 Final Enemy/Hurt/2.png',
        './img/2.Enemy/3 Final Enemy/Hurt/3.png',
        './img/2.Enemy/3 Final Enemy/Hurt/4.png'
    ];

    /**
     * Image paths for the "dead" animation.
     * @type {string[]}
     */
    ImagesDead = [
        './img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        './img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        './img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        './img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        './img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png'
    ];

    /**
     * Image paths for the "attack" animation.
     * @type {string[]}
     */
    ImagesAttack = [
        './img/2.Enemy/3 Final Enemy/Attack/1.png',
        './img/2.Enemy/3 Final Enemy/Attack/2.png',
        './img/2.Enemy/3 Final Enemy/Attack/3.png',
        './img/2.Enemy/3 Final Enemy/Attack/4.png',
        './img/2.Enemy/3 Final Enemy/Attack/5.png',
        './img/2.Enemy/3 Final Enemy/Attack/6.png'
    ];

    /**
     * Creates an instance of Endboss.
     * @param {number} id - The unique identifier for the Endboss instance.
     */
    constructor(id) {
        super();
        this.loadImages(this.ImagesFloating);
        this.loadImages(this.ImagesArise);
        this.loadImages(this.ImagesHurt);
        this.loadImages(this.ImagesDead);
        this.loadImages(this.ImagesAttack);

        /**
         * The unique identifier for this Endboss instance.
         * @type {number}
         */
        this.id = id;

        /**
         * The horizontal position of the Endboss.
         * @type {number}
         */
        this.x = 2400;

        /**
         * The vertical position of the Endboss.
         * @type {number}
         */
        this.y = -1;

        /**
         * The width of the Endboss.
         * @type {number}
         */
        this.width = 400;

        /**
         * The height of the Endboss.
         * @type {number}
         */
        this.height = 400;

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
        let i = 0; // Counter for the "arise" animation frames
        let d = 0; // Counter for the "dead" animation frames
        setInterval(() => {
            if (gameOn) {
                if (world.character.x > 2000) {
                    this.endbossAppears(i);
                    i++;
                } 
                if (this.getHurt) {
                    bossHurtSound.play();
                    this.playAnimation(this.ImagesHurt);
                }
                if (this.energy === 0) {
                    this.endbossDies(d);
                    d++;
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
