const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const gridSize = 20;
const tileCount = canvas.width / gridSize;

let snake = [{ x: 10, y: 10 }];
let food = { x: 15, y: 15 };
let dx = 0;
let dy = 0;

function gameLoop() {
  // Зміщення
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };

  // 🔴 Перевірка на зіткнення зі стіною
  if (
    head.x < 0 || head.x >= tileCount ||
    head.y < 0 || head.y >= tileCount
  ) {
    alert('Гру завершено! Змійка врізалась у стіну.');
    // Рестарт гри
    snake = [{ x: 10, y: 10 }];
    dx = 0;
    dy = 0;
    food = {
      x: Math.floor(Math.random() * tileCount),
      y: Math.floor(Math.random() * tileCount)
    };
    return; // вийти з gameLoop
  }
  // Додаємо нову голову
  snake.unshift(head);

  // Якщо з'їли їжу
  if (head.x === food.x && head.y === food.y) {
    food = {
      x: Math.floor(Math.random() * tileCount),
      y: Math.floor(Math.random() * tileCount)
    };
  } else {
    snake.pop(); // інакше видаляємо хвіст
  }

  // Очистка
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Малюємо їжу
  ctx.fillStyle = 'red';
  ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);

  // Малюємо змійку
  ctx.fillStyle = 'lime';
  snake.forEach(part => {
    ctx.fillRect(part.x * gridSize, part.y * gridSize, gridSize, gridSize);
  });
}

// Рух за стрілками
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowUp' && dy === 0) {
    dx = 0; dy = -1;
  } else if (e.key === 'ArrowDown' && dy === 0) {
    dx = 0; dy = 1;
  } else if (e.key === 'ArrowLeft' && dx === 0) {
    dx = -1; dy = 0;
  } else if (e.key === 'ArrowRight' && dx === 0) {
    dx = 1; dy = 0;
  }
});

// Запуск гри
setInterval(gameLoop, 100);
