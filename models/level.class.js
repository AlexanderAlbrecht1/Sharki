/**
 * Represents a level in the game, containing enemies, background objects, and collectable items.
 */
class Level {
    /**
     * @type {Array<Object>} Array of enemies present in the level.
     */
    enemies;

    /**
     * @type {Array<Object>} Array of background objects present in the level.
     */
    backgroundObjects;

    /**
     * @type {Array<Object>} Array of collectable objects present in the level.
     */
    collectableObjects;

    /**
     * @type {number} The x-coordinate where the level ends.
     */
    levelEndX = 2600;

    /**
     * Creates a new Level instance.
     * 
     * @param {Array<Object>} enemies - The enemies in the level.
     * @param {Array<Object>} backgroundObjects - The background objects in the level.
     * @param {Array<Object>} collectableObjects - The collectable objects in the level.
     */
    constructor(enemies, backgroundObjects, collectableObjects) {
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
        this.collectableObjects = collectableObjects;
    }
}
