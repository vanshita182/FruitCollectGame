
# Fruit Collect Game API

This is the **C# ASP.NET Core backend** for the Fruit Collect Game. It provides RESTful API endpoints for user authentication and score management, and connects to a PostgreSQL database for persistent storage.

## Backend Architecture & Tech Stack

- **Framework:** ASP.NET Core Web API (.NET 8.0)
- **ORM:** Entity Framework Core (with Npgsql for PostgreSQL)
- **Database:** PostgreSQL
- **API Docs:** Swagger (OpenAPI)
- **Environment Variables:** `.env` file for sensitive config

### Project Structure

- `Controllers/` — API endpoint logic (e.g., Auth, Score)
- `Models/` — Data models (User, Score)
- `Data/` — Database context (EF Core)
- `Program.cs` — App startup, service registration, DB connection

### How it Works

1. **Frontend** (HTML/JS) sends HTTP requests to the backend API endpoints.
2. **Backend** receives requests, processes them in controllers, and uses EF Core to read/write data in PostgreSQL.
3. **Database** stores users, scores, etc. All access is through the backend (never direct from frontend).

See below for setup and usage instructions.

## Prerequisites

- .NET 8.0 SDK


## Environment Variables

This project uses environment variables for sensitive configuration (like database credentials). Copy `.env.example` to `.env` and edit as needed:

```bash
cp .env.example .env
# Then edit .env to set your DB credentials
```

Example `.env`:
```
DB_HOST=127.0.0.1
DB_PORT=5432
DB_NAME=fruit_collect_game
DB_USER=postgres
DB_PASSWORD=your_password_here
```

## Database Setup (PostgreSQL)

1. Make sure PostgreSQL is running.
2. Create the database if it doesn't exist:
   ```sql
   CREATE DATABASE fruit_collect_game;
   ```
3. Set your DB credentials in the `.env` file as shown above.

## Getting Started

1.  Navigate to the project directory:
    ```bash
    cd Backend/FruitCollectGameapi
    ```

2.  Restore dependencies:
    ```bash
    dotnet restore
    ```

3.  Run the application:
    ```bash
    dotnet run
    ```

The API will be available at `http://localhost:5000` (or similar, check console output).
Interactive documentation is available at `/swagger`.

## Endpoints

-   `POST /api/Auth/signup`: Register a new user.
-   `POST /api/Auth/login`: Login.
-   `POST /api/Score`: Submit a score.
-   `GET /api/Score/highscores`: Get top 10 scores.
