let player1 = "";
let player2 = "";
let currentPlayer = "";
let currentPlayerGame = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
let gameActive = null;
const statusDisplay = document.querySelector(".gamestatus");
const wincon = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function nameOne() {
  player1 = document.querySelector("#tt").value;
  document.querySelector("#tt").style.display = "none";
  document.querySelector("#submit").style.display = "none";
  currentPlayer = player1;
  console.log(currentPlayer);
}

function nameTwoStart() {
  player2 = document.querySelector("#tt2").value;
  document.querySelector("#tt2").style.display = "none";
  document.querySelector("#submit2").style.display = "none";
  console.log(player2);
  Startgame();
}

function displayBoard() {
  document.querySelector(".board").style.display = "grid";
  statusDisplay.innerHTML = currentPlayer + "'s Turn";
  document.querySelector("#reset").style.display = "block";
}

function playerchange() {
  currentPlayer = currentPlayer === player1 ? player2 : player1;
  console.log(currentPlayer);
}

function boxClick() {
  let box = document.querySelector(".board");
  box.addEventListener("click", function (event) {
    const clickedCell = event.target;
    if (clickedCell.innerHTML == "") {
      clickedCell.innerHTML = currentPlayerGame;
      gameState[clickedCell.id] = currentPlayerGame;
      console.log(gameState);
      currentPlayerGame = currentPlayerGame === "X" ? "O" : "X";
      playerchange();
      statusDisplay.innerHTML = currentPlayer + "'s Turn";
      gameCheck();
    } else {
      alert("No cheating Pick another Square");
    }
  });
}
function gameCheck() {
  console.log("checking...");
  let roundWin = false;
  for (let i = 0; i <= 7; i++) {
    const win = wincon[i];
    let a = gameState[win[0]];
    let b = gameState[win[1]];
    let c = gameState[win[2]];
    if (a === "" || b === "" || c === "") {
      console.log(gameState);
      continue;
    }
    if (a === b && b === c) {
      console.log(gameState);
      roundWin = true;
      break;
    }
  }
  if (roundWin) {
    statusDisplay.innerHTML = currentPlayer + " Loses";
    document.querySelector(".board").style.display = "none";

    return;
  }
  let roundDraw = !gameState.includes("");
  if (roundDraw) {
    statusDisplay.innerHTML = "Draw Game";
    document.querySelector(".board").style.display = "none";
    return;
  }
}

function Startgame() {
  gameActive = true;
  displayBoard();
  if (gameActive) {
    boxClick();
  } else {
  }
}

function reset() {
  currentPlayer = player1;
  currentPlayerGame = "X";
  gameState = ["", "", "", "", "", "", "", "", ""];
  gameActive = null;
  document.getElementById("0").innerHTML = "";
  document.getElementById("1").innerHTML = "";
  document.getElementById("2").innerHTML = "";
  document.getElementById("3").innerHTML = "";
  document.getElementById("4").innerHTML = "";
  document.getElementById("5").innerHTML = "";
  document.getElementById("6").innerHTML = "";
  document.getElementById("7").innerHTML = "";
  document.getElementById("8").innerHTML = "";
  document.querySelector(".board").style.display = "grid";
  statusDisplay.innerHTML = currentPlayer + "'s Turn";
}
