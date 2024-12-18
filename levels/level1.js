
let level1;

/**
 * Asynchronously builds a game level by initializing enemies, background objects,
 * and collectibles (coins and poison items) for the level.
 * 
 * @async
 * @function buildLevel
 * @returns {Promise<void>} Resolves when the level is fully constructed.
 */
async function buildLevel() {

    level1 = new Level(
        enemies = [
            new pufferFish(350, 0),
            new pufferFish(600, 1),
            new pufferFish(850, 2),
            new pufferFish(1100, 3),
            new pufferFish(1350, 4),
            new pufferFish(1600, 5),
            new pufferFish(1850, 6),
            new pufferFish(2100, 7),
            new pufferFish(2350, 8),
            new JellyFish(500, (300 + Math.random() * 100), 9),
            new JellyFish(700, 450, 10),
            new JellyFish(850, 250, 11),
            new JellyFish(1100, 450, 12),
            new JellyFish(1100, 450, 13),
            new JellyFish(1369, (300 + Math.random() * 100), 14),
            new JellyFish(1965, 450, 15),
            new JellyFish(2100, 350, 16),
            new Endboss(161),
        ],

        [
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

            new BackgroundObjects('img/3. Background/Layers/5. Water/D1.png', 2880),
            new BackgroundObjects('img/3. Background/Layers/3.Fondo 1/D1.png', 2880),
            new BackgroundObjects('img/3. Background/Layers/4.Fondo 2/D1.png', 2880),
            new BackgroundObjects('img/3. Background/Layers/2. Floor/D1.png', 2880),
            new BackgroundObjects('img/3. Background/Layers/1. Light/2.png', 2880),
        ],

        [
            new Coin(300, 250, 0),
            new Coin(400, 300, 1),
            new Coin(500, 350, 2),
            new Coin(600, 400, 3),
            new Coin(700, 350, 4),
            new Coin(800, 3000, 5),
            new Coin(900, 250, 6),

            new Coin(1100, 200, 7),
            new Coin(1300, 300, 8),
            new Coin(1500, 300, 9),
            new Coin(1700, 100, 10),
            new Coin(1900, 50, 11),

            new Poison(1000, 150, 12),
            new Poison(1000, 350, 13),
            new Poison(1300, 150, 14),
            new Poison(1600, 50, 15),
            new Poison(1600, 350, 16),
            new Poison(1700, 200, 17),
            new Poison(1900, 250, 18),
            new Poison(400, 50, 19),
        ]
    );
}


