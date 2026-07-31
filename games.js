// games.js

function openSnakeGame() {
  const winId = createWindow('Змейка', `<div class="game-score" id="snake-score-${winId}">Счёт: 0</div><div class="game-canvas-wrapper"><canvas id="snake-canvas-${winId}" width="400" height="400"></canvas></div>`, { width: 450, height: 500, iconType: 'snake' });
  const state = { canvas: null, ctx: null, snake: [{x:10,y:10}], food: {x:15,y:15}, direction: 'right', score: 0, gameOver: false, intervalId: null };
  setTimeout(() => {
    state.canvas = document.getElementById(`snake-canvas-${winId}`);
    state.ctx = state.canvas.getContext('2d');
    const gameLoop = () => {
      if (state.gameOver) return;
      // логика игры (использует state)
      draw();
    };
    const draw = () => {
      state.ctx.fillStyle = '#111';
      state.ctx.fillRect(0,0,400,400);
      state.ctx.fillStyle = '#50fa7b';
      state.snake.forEach(seg => state.ctx.fillRect(seg.x*20, seg.y*20, 18, 18));
      state.ctx.fillStyle = '#f1c40f';
      state.ctx.fillRect(state.food.x*20, state.food.y*20, 18, 18);
      document.getElementById(`snake-score-${winId}`).textContent = 'Счёт: ' + state.score;
    };
    const onKey = (e) => {
      const keyMap = { ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right' };
      if (keyMap[e.key] && !state.gameOver) state.direction = keyMap[e.key];
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

// Аналогично для openTetris, openMinesweeper, openChess, openTicTacToe, open2048, openPuzzle
// Все используют изолированное состояние и удаляют обработчики при закрытии окна.
