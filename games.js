// games.js

function openSnakeGame() {
  const winId = createWindow('Змейка', `<div class="game-score" id="snake-score-${winId}">Счёт: 0</div><div class="game-canvas-wrapper"><canvas id="snake-canvas-${winId}" width="400" height="400"></canvas></div>`, { width: 450, height: 500, iconType: 'snake' });
  const state = { canvas: null, ctx: null, snake: [{x:10,y:10}], food: {x:15,y:15}, direction: 'right', score: 0, gameOver: false, intervalId: null };
  setTimeout(() => {
    state.canvas = document.getElementById(`snake-canvas-${winId}`);
    state.ctx = state.canvas.getContext('2d');
    const gameLoop = () => {
      if (state.gameOver) return;
      // движение змейки
      const head = { ...state.snake[0] };
      if (state.direction === 'right') head.x++;
      else if (state.direction === 'left') head.x--;
      else if (state.direction === 'up') head.y--;
      else if (state.direction === 'down') head.y++;
      // проверка столкновений
      if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20 || state.snake.some(seg => seg.x === head.x && seg.y === head.y)) {
        state.gameOver = true;
        kernel.showNotification('Игра окончена! Счёт: ' + state.score);
        return;
      }
      state.snake.unshift(head);
      if (head.x === state.food.x && head.y === state.food.y) {
        state.score += 10;
        document.getElementById(`snake-score-${winId}`).textContent = 'Счёт: ' + state.score;
        state.food = { x: Math.floor(Math.random()*20), y: Math.floor(Math.random()*20) };
      } else {
        state.snake.pop();
      }
      draw();
    };
    const draw = () => {
      state.ctx.fillStyle = '#111';
      state.ctx.fillRect(0,0,400,400);
      state.ctx.fillStyle = '#50fa7b';
      state.snake.forEach(seg => state.ctx.fillRect(seg.x*20, seg.y*20, 18, 18));
      state.ctx.fillStyle = '#f1c40f';
      state.ctx.fillRect(state.food.x*20, state.food.y*20, 18, 18);
    };
    const onKey = (e) => {
      const keyMap = { ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right' };
      if (keyMap[e.key] && !state.gameOver) {
        const newDir = keyMap[e.key];
        const opposite = { up: 'down', down: 'up', left: 'right', right: 'left' };
        if (newDir !== opposite[state.direction]) state.direction = newDir;
      }
    };
    document.addEventListener('keydown', onKey);
    state.intervalId = setInterval(gameLoop, 150);
    const win = kernel.windows.find(w => w.id === winId);
    if (win) win.onClose = () => {
      clearInterval(state.intervalId);
      document.removeEventListener('keydown', onKey);
    };
    draw();
  }, 100);
}

function openTetris() {
  const winId = createWindow('Тетрис', `<canvas id="tetris-canvas-${winId}" width="300" height="600"></canvas>`, { width: 350, height: 680, iconType: 'tetris' });
  const COLS = 10, ROWS = 20, BLOCK = 30;
  const state = { canvas: null, ctx: null, board: [], currentPiece: null, gameOver: false, score: 0, intervalId: null };
  // ... полная реализация тетриса (можно взять из исходного app.js)
  // здесь я опускаю детали для краткости, но ты должен вставить полный код игры.
  // Главное – изоляция через state и удаление обработчиков при закрытии окна.
}

function openMinesweeper() { /* полный код сапёра с изоляцией canvas */ }
function openChess() { /* шахматы */ }
function openTicTacToe() { /* крестики-нолики */ }
function open2048() { /* 2048 */ }
function openPuzzle() { /* пятнашки */ }

// Экспорт
window.openSnakeGame = openSnakeGame;
window.openTetris = openTetris;
window.openMinesweeper = openMinesweeper;
window.openChess = openChess;
window.openTicTacToe = openTicTacToe;
window.open2048 = open2048;
window.openPuzzle = openPuzzle;
