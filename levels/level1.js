const level1 = new Level(
    [
        new pufferFish((500 + Math.random() * 1500),1),
        new pufferFish((500 + Math.random() * 1500),2),
        new pufferFish((500 + Math.random() * 1500),3),
        new pufferFish((1000 + Math.random() * 1600),4),
        new pufferFish((1000 + Math.random() * 1600),5),
        new pufferFish((1000 + Math.random() * 1600),6),
        new pufferFish((2000 + Math.random() * 200),7),
        new pufferFish((2000 + Math.random() * 200),8),
        new pufferFish((2000 + Math.random() * 200),9),
        new pufferFish((2),10),
        new pufferFish((2),11),
        new pufferFish((2),12),
        new JellyFish(500,(300 + Math.random() * 100),101),
        new JellyFish(700,450,102),
        new JellyFish(850,250,103),
        new JellyFish(1100,450,104),
        new JellyFish(1100,450,105),
        new JellyFish(1369,(300 + Math.random() * 100),106),
        new JellyFish(1965,450,107),
        new JellyFish(2400,350,108),
        new JellyFish(2265,(300 + Math.random() * 100),109),

        
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
        new Coin(0),
        new Coin(1),
        new Coin(2),
        new Coin(3),
        new Coin(4),
        new Coin(5),
        new Coin(6),
        new Coin(7),
        new Coin(8),
        new Coin(9),
        new Coin(10),
        new Coin(11),
        new Coin(12),
        new Coin(13),
        new Poison(14),
        new Poison(15),
        new Poison(16),
        new Poison(17),
        new Poison(18),
        new Poison(19),
    ]
);