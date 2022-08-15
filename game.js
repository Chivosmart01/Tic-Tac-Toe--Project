function resetGameState() {
  activePlayer = 0;
  currentRound = 0;
  gameIsOver = false;
  gameOverElement.firstElementChild.innerHTML =
    'You won, <span id="winner-name">PLAYER NAME</span>!';
  gameOverElement.style.display = "none";

  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;

      gameFieldElements[gameBoardIndex].textContent = "";
      gameFieldElements[gameBoardIndex].classList.remove("disabled");

      gameBoardIndex++;
    }
  }
}

function startNewGame(e) {
  if (players[0].name === "" || players[1].name === "") {
    alert("please set player name");
    return;
  }

  resetGameState();

  activePLayerNameElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
}

function switchPLayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePLayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(e) {
  if (gameIsOver){
    return
  }

  const selectedColumn = e.target.dataset.col - 1;
  const selectedRow = e.target.dataset.row - 1;

  if (gameData[selectedRow][selectedColumn] > 0) {
    alert("PLease Select an empty field");
    return;
  }

  e.target.textContent = players[activePlayer].symbol;
  e.target.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1;
  console.log(gameData);

  const winnerId = checkForGameOver();
  console.log(winnerId);

  currentRound = currentRound + 1;
  switchPLayer();

  if (winnerId !== 0) {
    endGame(winnerId);
  }
}

function checkForGameOver() {
  for (let i = 0; i < 3; i++) {
    //checking the rows

    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }

    //checking the column

    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  //Top left to bottom right

  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  //Top right to bottom left

  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[0][2];
  }

  if (currentRound === 9) {
    return -1;
  }

  return 0;

  // if (
  //   gameData[1][0] > 0 &&
  //   gameData[1][0] === gameData[1][1] &&
  //   gameData[1][1] === gameData[1][2]
  // ) {
  //   return gameData[1][0];
  // }

  // if (
  //   gameData[2][0] > 0 &&
  //   gameData[2][0] === gameData[2][1] &&
  //   gameData[2][1] === gameData[2][2]
  // ) {
  //   return gameData[1][0];
  // }
}

function endGame(winnerId) {
  gameIsOver = true
  if (winnerId > 0) {
    const winnerName = players[winnerId - 1].name;
    // gameOverElement.style.display ="block"
    gameOverElement.children[0].firstElementChild.textContent = winnerName;
  } else {
    gameOverElement.children[0].textContent = "it's a draw!";
  }

  gameOverElement.style.display = "block";
}
