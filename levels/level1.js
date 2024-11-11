const level1 = new Level(
    [
        new pufferFish(),
        new pufferFish(),
        new JellyFish(),
        new pufferFish(),
        new pufferFish(),
        new JellyFish(),
        new Endboss(),
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

        // new BackgroundObjects('img/3. Background/Layers/5. Water/D2.png', 3600),
        // new BackgroundObjects('img/3. Background/Layers/3.Fondo 1/D2.png', 3600),
        // new BackgroundObjects('img/3. Background/Layers/4.Fondo 2/D2.png', 3600),
        // new BackgroundObjects('img/3. Background/Layers/2. Floor/D2.png', 3600),
        // new BackgroundObjects('img/3. Background/Layers/1. Light/2.png', 3600),
    ],
    [
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Poison(),
        new Poison(),
        new Poison(),
        new Poison(),
        new Poison(),
        new Poison(),
    ]
);