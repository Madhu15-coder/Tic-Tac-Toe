window.onload = function () {
  const board = document.getElementById("board");
  const status = document.getElementById("status");

  let currentPlayer = "X";
  let cells = ["", "", "", "", "", "", "", "", ""];
  let gameOver = false;

  function renderBoard() {
    board.innerHTML = "";
    cells.forEach((cell, index) => {
      const cellDiv = document.createElement("div");
      cellDiv.classList.add("cell");
      cellDiv.textContent = cell;
      cellDiv.addEventListener("click", () => makeMove(index));
      board.appendChild(cellDiv);
    });
  }

  function makeMove(index) {
    if (cells[index] === "" && !gameOver) {
      cells[index] = currentPlayer;
      checkWinner();
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      renderBoard();
    }
  }

  function checkWinner() {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (cells[a] && cells[a] === cells[b] && cells[b] === cells[c]) {
        status.innerHTML = `${cells[a]} wins!`;
        gameOver = true;
        return;
      }
    }

    if (!cells.includes("")) {
      status.innerHTML = "It's a draw!";
      gameOver = true;
    } else {
      status.innerHTML = `Turn: ${currentPlayer}`;
    }
  }

  window.resetGame = function () {
    cells = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameOver = false;
    status.innerHTML = "Turn: X";
    renderBoard();
  };

  // Initialize board
  renderBoard();
  status.innerHTML = "Turn: X";
};
