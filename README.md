# 🍎 Smart Login System with Fruit Collector Game

A modern web-based login system with an integrated **Fruit Collector Game** built using HTML, CSS, JavaScript, and Canvas API.

---

## 📖 Description

This project is a feature-rich login system with a fun and interactive **Fruit Collector Game** that users can play after logging in. The system includes:

- **Signup Page**: Create an account with name, email, and password validation.
- **Login Page**: Authenticate users with stored credentials.
- **Home Page**: Personalized welcome message and access to the Fruit Collector Game.
- **Fruit Collector Game**: A canvas-based arcade game with multiple levels, pause, restart, and instructions.

---

## 🎮 Game Features

- **Canvas-based gameplay**: Smooth 2D rendering using HTML5 Canvas.
- **Level Selection**: Choose from Easy, Medium, or Hard levels (affects fruit speed and spawn rate).
- **Controls**: Use Left/Right arrow keys to move the basket and catch falling fruits.
- **Pause/Resume**: Pause the game at any time and resume when ready.
- **Restart**: Restart the game with a single click.
- **Score & Lives**: Track your score and remaining lives in real-time.
- **Game Over Screen**: Displays your final score when all lives are lost.

---

## 🛠️ Technologies Used

- HTML5
- CSS3 (Bootstrap 5)
- JavaScript (ES6+)
- HTML5 Canvas API
- SweetAlert (for alerts)
- Font Awesome (icons)
- Google Fonts (Quicksand)

---

## 📁 Project Structure

```
smart-login-system/
│
├── index.html              # Login page (entry point)
├── README.md               # Project documentation
│
├── pages/
│   ├── home.html           # Home page with game UI
│   └── signup.html         # Signup page
│
├── assets/
│   ├── css/
│   │   ├── all.min.css         # Font Awesome styles
│   │   ├── bootstrap.min.css   # Bootstrap styles
│   │   ├── bootstrap.min.css.map
│   │   └── style.css           # Custom styles
│   │
│   ├── js/
│   │   ├── bootstrap.bundle.js # Bootstrap JS bundle
│   │   ├── main.js             # Login page logic
│   │   ├── signup.js           # Signup page logic
│   │   ├── home.js             # Home page & game logic
│   │   └── sweetalert.min.js   # SweetAlert library
│   │
│   ├── images/
│   │   ├── background.png      # Background image
│   │   └── favicon.ico         # Favicon
│   │
│   └── fonts/                  # Font Awesome webfonts
│
└── .vscode/                    # VS Code settings
```

---

## 🚀 How to Run

1. Clone or download this repository.
2. Open `index.html` in your browser.
3. Sign up or log in to access the home page and play the game.

---

## 🎯 How to Play the Game

1. After logging in, click **Play Game**.
2. (Optional) Click **Choose Level** to select Easy, Medium, or Hard.
3. Click **Start** to begin.
4. Use **Left/Right Arrow Keys** to move the basket.
5. Catch falling fruits to score points.
6. Missing a fruit costs you a life.
7. The game ends when all lives are lost.
8. Use **Pause** to pause and **Restart** to play again.

---

## 🔮 Future Improvements

- [ ] Add sound effects and background music
- [ ] Add more fruit types and special power-ups
- [ ] Implement a global leaderboard with backend storage
- [ ] Add mobile touch controls for better mobile experience
- [ ] Add user profile page with game history and stats
- [ ] Implement animated fruit and basket sprites
- [ ] Add a timer mode (score as many as possible in 60 seconds)
- [ ] Add dark mode / theme switcher
- [ ] Integrate with a backend (Node.js/Express or ASP.NET Core) for persistent user accounts
- [ ] Add multiplayer/competitive mode
- [ ] Progressive Web App (PWA) support for offline play

---

