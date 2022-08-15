const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]

let editedPLayer = 0;
let currentRound = 1; 
let activePlayer = 0;
let gameIsOver = false

const players =[
  {
    name: "",
    symbol:"X"
  },
  {
    name: "",
    symbol: "O"
  },
];

const gameFieldElements = document.querySelectorAll("#game-board li")
console.log(gameFieldElements)
const gameAreaElement = document.getElementById("active-game");
const startNewGameBtnElement = document.getElementById("start-game-btn")
const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");
// console.log(errorsOutputElement);

const gameOverElement = document.getElementById("game-over");
const activePLayerNameElement = document.getElementById("active-player-name");
const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);
startNewGameBtnElement.addEventListener("click",startNewGame )

cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);


for (const gameFieldElement of gameFieldElements) {
  gameFieldElement.addEventListener("click", selectGameField)
}

// gameFieldElement.addEventListener("click", selectGameField)

formElement.addEventListener("submit", savePLayerConfig);