let logOutBtn = document.getElementById("logOutBtn");
let welcomeUser = document.getElementById("userName");
let userName = localStorage.getItem("userName");

welcomeUser.innerHTML = "Welcome " + userName;

logOutBtn.addEventListener("click", function () {
  window.location.href = "../index.html";
});

// Page navigation
const instructionsBtn = document.getElementById('instructionsBtn');
const chooseLevelBtn = document.getElementById('chooseLevelBtn');
const playGameBtn = document.getElementById('playGameBtn');
const backFromInstructions = document.getElementById('backFromInstructions');
const backFromLevel = document.getElementById('backFromLevel');
const backFromGame = document.getElementById('backFromGame');
const gameNav = document.getElementById('gameNav');
const instructionsPage = document.getElementById('instructionsPage');
const chooseLevelPage = document.getElementById('chooseLevelPage');
const gamePage = document.getElementById('gamePage');

function showPage(page) {
  instructionsPage.style.display = 'none';
  chooseLevelPage.style.display = 'none';
  gamePage.style.display = 'none';
  gameNav.style.display = 'none';
  if (page) page.style.display = 'block';
  else gameNav.style.display = 'block';
}
instructionsBtn.onclick = () => showPage(instructionsPage);
chooseLevelBtn.onclick = () => showPage(chooseLevelPage);
playGameBtn.onclick = () => showPage(gamePage);
backFromInstructions.onclick = () => showPage(null);
backFromLevel.onclick = () => showPage(null);
backFromGame.onclick = () => { showPage(null); stopCanvasGame(); };

// Level selection
let selectedLevel = 1;
const levelBtns = document.querySelectorAll('.level-btn');
levelBtns.forEach(btn => {
  btn.onclick = function() {
    selectedLevel = parseInt(this.dataset.level);
    levelBtns.forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    alert('Level ' + selectedLevel + ' selected!');
  };
});

// Canvas Fruit Collector Game
const canvas = document.getElementById('fruitGameCanvas');
const ctx = canvas ? canvas.getContext('2d') : null;
const canvasScore = document.getElementById('canvasScore');
const canvasLives = document.getElementById('canvasLives');
const canvasLevel = document.getElementById('canvasLevel');
const canvasStartBtn = document.getElementById('canvasStartBtn');
const canvasPauseBtn = document.getElementById('canvasPauseBtn');
const canvasRestartBtn = document.getElementById('canvasRestartBtn');
const canvasGameOver = document.getElementById('canvasGameOver');

let basket = { x: 220, y: 300, width: 60, height: 30, speed: 7 };
let fruits = [];
let score = 0;
let lives = 3;
let playing = false;
let paused = false;
let fruitImages = ['🍎','🍌','🍇','🍉','🍒','🍍','🥝'];
let gameInterval;
let fruitSpeed = 4;

function getLevelSpeed(level) {
  if (level === 1) return 4;
  if (level === 2) return 7;
  return 11;
}

function drawBasket() {
  ctx.save();
  ctx.fillStyle = '#8d5524';
  ctx.fillRect(basket.x, basket.y, basket.width, basket.height);
  ctx.strokeStyle = '#d2b48c';
  ctx.lineWidth = 2;
  ctx.strokeRect(basket.x, basket.y, basket.width, basket.height);
  ctx.restore();
}

function drawFruit(fruit) {
  ctx.font = '32px Arial';
  ctx.textAlign = 'center';
  ctx.fillText(fruit.type, fruit.x, fruit.y);
}

function spawnFruit() {
  let type = fruitImages[Math.floor(Math.random() * fruitImages.length)];
  let x = Math.random() * (canvas.width - 40) + 20;
  fruits.push({ x: x, y: 0, type: type, caught: false });
}

function updateGame() {
  if (paused) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBasket();
  for (let i = 0; i < fruits.length; i++) {
    let fruit = fruits[i];
    fruit.y += fruitSpeed;
    drawFruit(fruit);
    // Check collision
    if (
      fruit.y + 16 > basket.y &&
      fruit.x > basket.x &&
      fruit.x < basket.x + basket.width
    ) {
      score++;
      canvasScore.textContent = 'Score: ' + score;
      fruits.splice(i, 1);
      i--;
      continue;
    }
    // Missed fruit
    if (fruit.y > canvas.height) {
      lives--;
      canvasLives.textContent = 'Lives: ' + lives;
      fruits.splice(i, 1);
      i--;
      if (lives <= 0) {
        endCanvasGame();
        return;
      }
    }
  }
  // Spawn new fruit randomly
  if (Math.random() < 0.03 + (selectedLevel * 0.01)) {
    spawnFruit();
  }
}

function endCanvasGame() {
  playing = false;
  paused = false;
  clearInterval(gameInterval);
  canvasGameOver.textContent = 'Game Over! Your score is ' + score;
  canvasGameOver.style.display = 'block';
  canvasStartBtn.textContent = 'Start';
  canvasPauseBtn.disabled = true;
}

function startCanvasGame() {
  if (!ctx) return;
  fruits = [];
  score = 0;
  lives = 3;
  fruitSpeed = getLevelSpeed(selectedLevel);
  canvasScore.textContent = 'Score: ' + score;
  canvasLives.textContent = 'Lives: ' + lives;
  canvasLevel.textContent = 'Level: ' + selectedLevel;
  canvasGameOver.style.display = 'none';
  canvasStartBtn.textContent = 'Start';
  canvasPauseBtn.disabled = false;
  canvasPauseBtn.textContent = 'Pause';
  paused = false;
  playing = true;
  basket.x = 220;
  clearInterval(gameInterval);
  gameInterval = setInterval(updateGame, 30);
}

function stopCanvasGame() {
  playing = false;
  paused = false;
  clearInterval(gameInterval);
  if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvasStartBtn.textContent = 'Start';
  canvasPauseBtn.disabled = true;
  canvasPauseBtn.textContent = 'Pause';
}

if (canvasStartBtn) {
  canvasStartBtn.onclick = function() {
    startCanvasGame();
  };
}

if (canvasPauseBtn) {
  canvasPauseBtn.onclick = function() {
    if (!playing) return;
    paused = !paused;
    canvasPauseBtn.textContent = paused ? 'Resume' : 'Pause';
  };
}

if (canvasRestartBtn) {
  canvasRestartBtn.onclick = function() {
    startCanvasGame();
  };
}

if (canvas) {
  document.addEventListener('keydown', function(e) {
    if (!playing || paused) return;
    if (e.key === 'ArrowLeft') {
      basket.x -= basket.speed;
      if (basket.x < 0) basket.x = 0;
    } else if (e.key === 'ArrowRight') {
      basket.x += basket.speed;
      if (basket.x + basket.width > canvas.width) basket.x = canvas.width - basket.width;
    }
  });
}
