(() => {
  const cells = [...document.querySelectorAll(".cell")];
  const status = document.getElementById("status");
  const scoreX = document.getElementById("wins-x");
  const scoreO = document.getElementById("wins-o");
  const cardX = document.getElementById("score-x");
  const cardO = document.getElementById("score-o");
  const wins = { X: 0, O: 0 };
  const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  let board = Array(9).fill("");
  let current = "X";
  let finished = false;

  function updateTurn() {
    cardX.classList.toggle("active", !finished && current === "X");
    cardO.classList.toggle("active", !finished && current === "O");
  }
  function startRound() {
    board = Array(9).fill("");
    current = "X";
    finished = false;
    cells.forEach((cell, i) => {
      cell.textContent = "";
      cell.disabled = false;
      cell.className = "cell";
      cell.setAttribute("aria-label", `Cell ${i + 1}, empty`);
    });
    status.textContent = "Player X's turn";
    updateTurn();
  }
  function finish(message, winningLine = []) {
    finished = true;
    status.textContent = message;
    cells.forEach(cell => cell.disabled = true);
    winningLine.forEach(i => cells[i].classList.add("winner"));
    updateTurn();
  }
  function play(index) {
    if (finished || board[index]) return;
    board[index] = current;
    const cell = cells[index];
    cell.textContent = current;
    cell.classList.add(current.toLowerCase());
    cell.setAttribute("aria-label", `Cell ${index + 1}, ${current}`);
    cell.disabled = true;

    const winningLine = lines.find(line => line.every(i => board[i] === current));
    if (winningLine) {
      wins[current]++;
      scoreX.textContent = wins.X;
      scoreO.textContent = wins.O;
      finish(`Player ${current} wins!`, winningLine);
    } else if (board.every(Boolean)) {
      finish("It's a draw. Nice game!");
    } else {
      current = current === "X" ? "O" : "X";
      status.textContent = `Player ${current}'s turn`;
      updateTurn();
    }
  }
  cells.forEach(cell => cell.addEventListener("click", () => play(Number(cell.dataset.index))));
  document.getElementById("restart").addEventListener("click", startRound);
  document.getElementById("reset").addEventListener("click", () => {
    wins.X = 0; wins.O = 0;
    scoreX.textContent = "0"; scoreO.textContent = "0";
    startRound();
  });
  startRound();
})();
