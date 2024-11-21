function startScreenHTML() {
    return /*html*/  `
    <div class="how-to-play-wrapper">
            <div class="how-to-play" onclick="howToPlay()">
                <img src="./img/circle-question-regular.svg" alt="How to Play">
                <p>How to play</p>
            </div>
    </div>
    <p>Little Sharkies adventure</p>
    <img class="start-button" src="./img/6.Botones/Start/1.png" alt="Start Button" onclick="startGame()">
    <div class="links">
        <a href="./impressum.html">Impressum</a>
    </div>
    `;
}

function howToPlayHTML() {
    return /*html*/ `
     <div class="htp-wrapper">
            <div class="go-back">
                <p onclick="goBack()">X</p>
            </div>
            <div class="keys-and-functions">
                <div class="movement">
                    <div class="keys">
                        <div class="up">
                            <img class="arrow" src="./img/arrowUp.svg" alt="arrow up">
                        </div>
                        <div class="others">
                            <img class="arrow" src="./img/arrowLeft.svg" alt="arrow left">
                            <img class="arrow" src="./img/arrowDown.svg" alt="arrow down">
                            <img class="arrow" src="./img/arrowRight.svg" alt="arrow right">
                        </div>
                    </div>
                    <div class="description">
                        <p>Swim up / <br>
                         Swim left / Swim down / Swim right</p>
                    </div>
                </div>
                <div class="attacks">
                    <div class="slap">
                        <img src="./img/6.Botones/Key/Space Bar key.png" alt="space bar">
                        <p>push space bar to slap a pufferfish or endboss</p>
                    </div>
                    <div class="bubble-trap">
                        <div class="img-wrapper">
                            <img src="./img/Q-Key.svg" alt="Q Key">
                        </div>
                        <p>push Q to fire a bubble trap for jellyfish</p>
                    </div>
                    <div class="posion-bubble">
                        <div class="img-wrapper">
                            <img src="./img/E-Key.svg" alt="E Key">
                        </div>
                        <p>push E to fire a strong poison bubble</p>
                    </div>
                </div>
                <div class="text">
                    <p>Jellyfish and pufferfish are enemies that should not be touched. Poison and coins can be collected. Beware of the final boss.</p>
                </div>
            </div>
        </div>
    </div>
    `
}
