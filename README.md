# 🎮 XO Arena | Dockerized Tic-Tac-Toe Game

A lightweight, browser-based Tic-Tac-Toe game built with HTML, CSS, and JavaScript, containerized using Docker and served through Nginx. The project demonstrates Docker image creation, container deployment, health checks, and publishing images to Docker Hub.

[![Docker Hub](https://img.shields.io/badge/Docker%20Hub-Available-blue?logo=docker)](https://hub.docker.com/r/sivasankaran189/xo-game)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-Web%20Server-009639?logo=nginx&logoColor=white)
![License](https://img.shields.io/badge/License-Not%20Specified-lightgrey)

## ✨ Features

- 🎯 Two-player gameplay with X and O.
- 🏆 Automatic win detection for rows, columns, and diagonals.
- 🤝 Draw detection when the board is full.
- 📊 Scoreboard to track both players' wins.
- 🔄 Restart a round without resetting the scores.
- ♻️ Reset scores and start a fresh game.
- 📱 Responsive interface for desktop and mobile devices.
- 🐳 Dockerized deployment using a lightweight Nginx image.
- ❤️ Container health checks to monitor web server availability.
- 🔐 Non-root container execution for improved security.
- 📝 Docker Compose configuration with log rotation.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Game structure |
| CSS3 | Styling and responsive layout |
| JavaScript | Game logic and score tracking |
| Nginx | Static web server |
| Docker | Application containerization |
| Docker Compose | Container configuration and lifecycle management |
| Docker Hub | Container image distribution |

## 🏗️ Architecture

```text
             User's Browser
                   |
                   | HTTP :8080
                   v
           Docker Container
                   |
                   v
             Nginx Server
                   |
                   v
          Static Game Files
          /       |       \
     index.html  style.css  app.js
```

The game runs entirely in the browser. Nginx serves the static files from inside the Docker container, so no backend API or database is required.

## 🚀 Run the Game from Docker Hub

You can run the published image without cloning the repository or building it locally.

### 1. Pull the Docker image

```bash
docker pull sivasankaran189/xo-game:latest
```

### 2. Start the container

```bash
docker run -d \
  --name xo-game \
  -p 8080:8080 \
  --restart unless-stopped \
  sivasankaran189/xo-game:latest
```

### 3. Open the application

Visit **http://localhost:8080** in your browser and start playing.

### 4. Verify the container

```bash
docker ps
docker logs xo-game
docker inspect --format='{{.State.Health.Status}}' xo-game
```

The health status may take a few seconds to become `healthy`.

### 5. Stop the application

```bash
docker stop xo-game
docker rm xo-game
```

## 💻 Run Locally with Docker Compose

### Prerequisites

- Docker Desktop or Docker Engine
- Git, if cloning the repository

### Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd <YOUR_PROJECT_FOLDER>
```

Replace the placeholders with your actual GitHub repository URL and folder name.

### Build and start the application

```bash
docker compose up --build -d
```

Open http://localhost:8080.

Check the service status:

```bash
docker compose ps
```

View application logs:

```bash
docker compose logs -f
```

Stop the application:

```bash
docker compose down
```

## 🐳 Build the Docker Image Manually

Build the image from the project directory:

```bash
docker build -t xo-game:1.0 .
```

Run the image:

```bash
docker run -d \
  --name xo-game-local \
  -p 8080:8080 \
  xo-game:1.0
```

Access the game at http://localhost:8080.

If port `8080` is already in use, use `-p 8081:8080` and visit http://localhost:8081.

## 📦 Publish to Docker Hub

To publish an updated version of the application:

### 1. Authenticate with Docker Hub

```bash
docker login
```

### 2. Build the tagged image

```bash
docker build -t sivasankaran189/xo-game:1.0 .
```

### 3. Push the versioned image

```bash
docker push sivasankaran189/xo-game:1.0
```

### 4. Tag and publish the latest version

```bash
docker tag sivasankaran189/xo-game:1.0 sivasankaran189/xo-game:latest
docker push sivasankaran189/xo-game:latest
```

**Docker Hub repository:** https://hub.docker.com/r/sivasankaran189/xo-game

## 📁 Project Structure

```text
XO-Arena/
├── index.html       # Game interface
├── style.css        # Styling and responsive design
├── app.js           # Game logic and score tracking
├── Dockerfile       # Docker image definition
├── nginx.conf       # Nginx server configuration
├── compose.yaml     # Docker Compose configuration
├── .dockerignore    # Files excluded from the build context
└── README.md        # Project documentation
```

## 🎮 How to Play

1. Player X starts the game.
2. Players take turns selecting empty cells.
3. The first player to align three matching symbols horizontally, vertically, or diagonally wins.
4. If all nine cells are occupied without a winner, the round ends in a draw.
5. Select **Restart round** to play again.
6. Select **Reset scores** to clear both players' scores.

## 🔒 Docker Best Practices Implemented

- **Lightweight runtime:** Uses an Alpine-based Nginx image.
- **Non-root execution:** Runs the web server as an unprivileged user.
- **Health checks:** Checks whether Nginx is serving HTTP requests.
- **Read-only filesystem:** Enabled in the Docker Compose configuration, with temporary writable directories provided where required.
- **Log rotation:** Limits Docker container log growth.
- **Build context optimization:** Uses `.dockerignore` to exclude unnecessary files.
- **Port exposure:** Publishes the web server port for browser access.

## ⚠️ Limitations

- Scores are maintained in browser memory and reset when the page is refreshed.
- The game supports two players sharing the same browser, not online multiplayer.
- No backend, database, or user authentication is included.

## 🎯 Learning Outcomes

This project provides practical experience with:

- Writing and building Dockerfiles.
- Running and managing containers.
- Serving static web applications with Nginx.
- Configuring Docker port mapping.
- Using Docker Compose.
- Implementing health checks and container logging.
- Publishing and pulling Docker images through Docker Hub.

## 👨‍💻 Author

**Sivasankaran**

- Docker Hub: [sivasankaran189/xo-game](https://hub.docker.com/r/sivasankaran189/xo-game)

---

⭐ If you find this project useful, consider giving the repository a star!
