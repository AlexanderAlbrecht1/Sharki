class Level {
    enemies;
    backgroundObjects;
    collectableObjects;
    levelEndX = 2600;

    constructor(enemies,backgroundObjects,collectableObjects) {
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
        this.collectableObjects = collectableObjects;
    }
}