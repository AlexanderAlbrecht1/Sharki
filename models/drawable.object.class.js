/**
 * Represents a drawable object in the game. 
 * Provides methods to load images, cache them, and draw them onto a canvas.
 */
class DrawableObject {
    /**
     * The horizontal position of the object.
     * @type {number}
     */
    x = 120;

    /**
     * The vertical position of the object.
     * @type {number}
     */
    y = 250;

    /**
     * The height of the object.
     * @type {number}
     */
    height = 200;

    /**
     * The width of the object.
     * @type {number}
     */
    width = 200;

    /**
     * The primary image for the object.
     * @type {HTMLImageElement}
     */
    img;

    /**
     * A cache of preloaded images, keyed by their file path.
     * @type {Object.<string, HTMLImageElement>}
     */
    imageCache = {};

    /**
     * The index of the currently displayed image in an animation sequence.
     * @type {number}
     */
    currentImage = 0;

    /**
     * Offset for collision detection or frame adjustments on the left side.
     * @type {number}
     */
    offsetLeft = 0;

    /**
     * Offset for collision detection or frame adjustments on the right side.
     * @type {number}
     */
    offsetRight = 0;

    /**
     * Offset for collision detection or frame adjustments on the top side.
     * @type {number}
     */
    offsetTop = 0;

    /**
     * Offset for collision detection or frame adjustments on the bottom side.
     * @type {number}
     */
    offsetBottom = 0;

    /**
     * Indicates whether the object is "dead" (no longer active or drawable).
     * @type {boolean}
     */
    dead = false;

    /**
     * Loads a single image and sets it as the object's primary image.
     * @param {string} path - The file path to the image.
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Preloads an array of images and stores them in the image cache.
     * @param {string[]} arr - An array of file paths to the images.
     */
    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
     * Draws the object's current image on the provided canvas context.
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * Draws a green frame around the object, primarily for debugging purposes.
     * This is applied to certain subclasses such as `Character`, `pufferFish`, `JellyFish`, and `Endboss`.
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
     */
    drawFrame(ctx) {
        if (this instanceof Character || this instanceof pufferFish || this instanceof JellyFish || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'green';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    /**
     * Draws a red frame around the object based on its offset values, primarily for debugging collision areas.
     * This is applied to certain subclasses such as `Character`, `pufferFish`, `JellyFish`, and `Endboss`.
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
     */
    drawFrameoffset(ctx) {
        if (this instanceof Character || this instanceof pufferFish || this instanceof JellyFish || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '1';
            ctx.strokeStyle = 'red';
            ctx.rect(
                this.x + this.offsetLeft,
                this.y + this.offsetTop,
                this.width - this.offsetRight,
                this.height - this.offsetBottom
            );
            ctx.stroke();
        }
    }
}
