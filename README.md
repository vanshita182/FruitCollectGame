# 🍎 Fruit Collector Game - Full Stack Application

A modern full-stack application featuring a login system and interactive **Fruit Collector Game** with a dedicated backend API and PostgreSQL database.

---

## 📖 Description

This project is a complete full-stack solution with:

- **Frontend**: Responsive web interface with signup, login, and an interactive fruit collector game (HTML5 Canvas)
- **Backend**: ASP.NET Core REST API for authentication and score management
- **Database**: PostgreSQL for persistent storage of users and scores

### Features

- **User Authentication**: Secure signup and login system
- **Fruit Collector Game**: Canvas-based arcade game with multiple difficulty levels
- **Score Tracking**: Submit and view leaderboards
- **RESTful API**: Complete API documentation via Swagger

---

## 🛠️ Tech Stack

### Frontend
- HTML5, CSS3 (Bootstrap 5)
- JavaScript (ES6+)
- HTML5 Canvas API
- SweetAlert, Font Awesome

### Backend
- **Framework**: ASP.NET Core Web API (.NET 8.0)
- **ORM**: Entity Framework Core
- **Database**: PostgreSQL
- **API Docs**: Swagger (OpenAPI)

---

## 🎮 Game Features

- **Canvas-based gameplay**: Smooth 2D rendering using HTML5 Canvas
- **Level Selection**: Choose from Easy, Medium, or Hard levels (affects difficulty)
- **Controls**: Use Left/Right arrow keys to move the basket and catch falling fruits
- **Pause/Resume**: Pause the game at any time and resume when ready
- **Restart**: Restart the game with a single click
- **Score & Lives**: Track your score and remaining lives in real-time
- **Game Over Screen**: Displays your final score and allows score submission
- **Leaderboard**: View top scores from all players (stored in backend database)

---

## 📁 Project Structure

```
FruitCollectGame/
│
├── index.html                          # Login page (entry point)
├── README.md                           # This file
│
├── frontend/                           # Frontend application
│   ├── home.html                       # Home page with game UI
│   └── signup.html                     # Signup page
│
├── assets/                             # Shared frontend assets
│   ├── css/
│   │   ├── style.css                   # Custom styles
│   │   ├── bootstrap.min.css           # Bootstrap framework
│   │   └── all.min.css                 # Font Awesome icons
│   │
│   ├── js/
│   │   ├── main.js                     # Login logic
│   │   ├── signup.js                   # Signup logic
│   │   ├── home.js                     # Game logic
│   │   ├── bootstrap.bundle.js         # Bootstrap JS
│   │   └── sweetalert.min.js           # Alert library
│   │
│   ├── images/                         # Image assets
│   └── fonts/                          # Font assets
│
└── Backend/
    └── FruitCollectGameapi/            # ASP.NET Core API
        ├── Program.cs                  # App configuration & setup
        ├── README.md                   # Backend documentation
        ├── .env.example                # Environment variables template
        ├── .gitignore                  # Git ignore rules
        │
        ├── Controllers/
        │   ├── AuthController.cs       # User auth endpoints
        │   └── ScoreController.cs      # Score management endpoints
        │
        ├── Models/
        │   ├── User.cs                 # User data model
        │   └── Score.cs                # Score data model
        │
        ├── Data/
        │   └── GameContext.cs          # EF Core DbContext
        │
        └── FruitCollectGameapi.csproj  # Project file
```

---

## 📋 Prerequisites

### Frontend
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required!

### Backend
- [.NET 8.0 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
- [PostgreSQL](https://www.postgresql.org/download/) (local or remote)

---

## 🚀 Quick Start

### 1. Frontend Setup

```bash
# No build step needed!
# Simply open index.html in your browser or serve with any HTTP server
# Example using Python:
python -m http.server 8000
# Then visit http://localhost:8000
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd Backend/FruitCollectGameapi

# Copy environment variables template
cp .env.example .env

# Edit .env with your database credentials
# DB_HOST=127.0.0.1
# DB_PORT=5432
# DB_NAME=fruit_collect_game
# DB_USER=postgres
# DB_PASSWORD=your_password

# Restore dependencies
dotnet restore

# Run the application
dotnet run
```

Backend will be available at `http://localhost:5000`
Swagger API docs at `http://localhost:5000/swagger`
<img width="2560" height="1600" alt="image" src="https://github.com/user-attachments/assets/2cb23db5-b5cf-473c-8476-b0f7a07d5b2b" />

### 3. Database Setup

```sql
-- Connect to PostgreSQL and create the database
CREATE DATABASE fruit_collect_game;
```

The database tables will be created automatically on first run via Entity Framework Core migrations.

---

## 🔌 Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│ Frontend (HTML/JS/Canvas) - frontend/ folder                    │
│ - Displays user interface                                       │
│ - Handles user input (keyboard, mouse)                          │
│ - Renders game graphics with Canvas API                         │
│ - Sends HTTP requests to backend                                │
└────────────────┬─────────────────────────────────────────────────┘
                 │ HTTP Requests/Responses (JSON)
                 │ CORS enabled for cross-origin requests
                 ▼
┌─────────────────────────────────────────────────────────────────┐
│ Backend (ASP.NET Core API) - Backend/FruitCollectGameapi/       │
│ - Processes authentication requests                             │
│ - Validates user credentials                                    │
│ - Manages score submissions and queries                         │
│ - Business logic and data validation                            │
│ - Swagger API documentation                                     │
└────────────────┬─────────────────────────────────────────────────┘
                 │ SQL Queries (Entity Framework Core)
                 ▼
┌─────────────────────────────────────────────────────────────────┐
│ Database (PostgreSQL)                                           │
│ - Users table (id, name, email, password)                      │
│ - Scores table (id, userId, score, timestamp)                  │
│ - Persistent storage of all application data                    │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📡 API Endpoints

### Authentication
- `POST /api/Auth/signup` — Register a new user
- `POST /api/Auth/login` — User login

### Scores
- `POST /api/Score` — Submit a game score
- `GET /api/Score/highscores` — Get top 10 scores

For detailed API documentation, visit `http://localhost:5000/swagger` when backend is running.

---

## 🎯 How to Play the Game

1. After logging in, navigate to the home page
2. Click **Play Game**
3. (Optional) Click **Choose Level** to select Easy, Medium, or Hard difficulty
4. Click **Start** to begin the game
5. Use **Left/Right Arrow Keys** to move the basket
6. Catch falling fruits to earn points
7. Each missed fruit costs you a life
8. The game ends when all lives are lost
9. Submit your final score to the leaderboard
10. Use **Pause** to pause gameplay and **Restart** to play again

---

## 🔒 Security & Best Practices

- **Sensitive Data**: Database passwords stored in `.env` file (never committed to git via `.gitignore`)
- **CORS**: Enabled in backend for secure frontend-backend communication
- **API Validation**: Controllers validate all incoming requests
- **Password Protection**: Consider implementing bcrypt for password hashing in production
- **HTTPS**: Recommended for production deployment

---

## 📝 Development Notes

### Frontend Development
- Frontend files are in `frontend/` and root directories
- Uses vanilla JavaScript (no framework)
- Responsive design with Bootstrap 5
- Real-time game rendering with Canvas API

### Backend Development
- Located in `Backend/FruitCollectGameapi/`
- Built with ASP.NET Core (.NET 8.0)
- Entity Framework Core for database access
- See `Backend/FruitCollectGameapi/README.md` for backend-specific details

### Running in Development Mode

**Frontend:**
```bash
# Serve frontend with Python
python -m http.server 8000
# Or use any HTTP server
```

**Backend:**
```bash
cd Backend/FruitCollectGameapi
dotnet watch run    # Auto-reload on file changes
```

---

## 🐛 Troubleshooting

### Frontend not connecting to backend?
- ✓ Ensure backend is running on `http://localhost:5000`
- ✓ Check browser console (F12) for CORS or connection errors
- ✓ Verify CORS is enabled in `Backend/FruitCollectGameapi/Program.cs`

### Database connection fails?
- ✓ Ensure PostgreSQL is running
- ✓ Verify credentials in `.env` match your PostgreSQL setup
- ✓ Check that database `fruit_collect_game` exists
- ✓ Review connection string in `Program.cs`

### Swagger not accessible?
- ✓ Backend must be running: `dotnet run`
- ✓ Navigate to `http://localhost:5000/swagger`
- ✓ If 404 error, Swagger middleware may not be enabled in `Program.cs`

### 404 Error on /swagger endpoint?
- ✓ This was fixed in the setup - Swagger middleware is always enabled
- ✓ Ensure you're accessing the correct backend URL and port

---

## 🚀 Future Enhancements

- [ ] Add background music and sound effects
- [ ] Implement advanced animations for fruits
- [ ] Add more fruit types and power-up items
- [ ] User profile page with game history and statistics
- [ ] Global leaderboard with player rankings
- [ ] Mobile app version (React Native or Flutter)
- [ ] Multiplayer competitive mode
- [ ] Achievement and badge system
- [ ] OAuth login (Google, GitHub)
- [ ] Dark mode support
- [ ] Progressive Web App (PWA) for offline play

---

## 📄 License

This project is open source and available for educational purposes.

---

## 👤 Created By

Vanshita's Fruit Collector Game - Full Stack Project

---

## 📞 Support & Documentation

- **Frontend Issues**: Refer to this README
- **Backend Setup**: See `Backend/FruitCollectGameapi/README.md`
- **API Documentation**: Visit `http://localhost:5000/swagger` (when backend is running)
- **Environment Variables**: See `Backend/FruitCollectGameapi/.env.example`



