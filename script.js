let board;
let currentPlayer;
let gameActive;

function startGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;

  const boardContainer = document.getElementById("board");
  boardContainer.innerHTML = "";

  board.forEach((cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("cell");
    cellElement.addEventListener("click", () => makeMove(index));
    boardContainer.appendChild(cellElement);
  });

  document.getElementById("status").textContent = `Player ${currentPlayer}'s turn`;
}

function makeMove(index) {
  if (!gameActive || board[index] !== "") return;

  board[index] = currentPlayer;
  document.querySelectorAll(".cell")[index].textContent = currentPlayer;

  if (checkWinner()) {
    document.getElementById("status").textContent = `Player ${currentPlayer} wins!`;
    gameActive = false;
  } else if (board.every(cell => cell
