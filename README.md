XO Arena 🎮
A lightweight, browser-based XO (Tic-Tac-Toe) game for two players, packaged as a Docker image and served using an unprivileged Nginx container.
Docker Hub: https://hub.docker.com/r/sivasankaran189/xo-game
✨ Features
Two-player gameplay: Player X vs Player O
Detects horizontal, vertical, and diagonal wins
Detects draws
Highlights the winning combination
Scoreboard for both players
Restart a round without resetting scores
Reset scores and start a fresh game
Responsive interface for desktop and mobile
Lightweight Nginx-based Docker image
Container health check
Non-root container process
Docker Compose configuration with log rotation
🧰 Tech Stack
HTML
CSS
JavaScript
Nginx
Docker
Docker Compose
The game is a static web application. It does not require a Node.js runtime, backend API, or database to run.
🚀 Run from Docker Hub
Make sure Docker Desktop or Docker Engine is running.
1. Pull the image
```powershell
docker pull sivasankaran189/xo-game:latest
```
2. Start a container
```powershell
docker run -d --name xo-game -p 8080:8080 --restart unless-stopped sivasankaran189/xo-game:latest
```
3. Open the game
Visit:
http://localhost:8080
4. Check the container
```powershell
docker ps
docker inspect --format='{{.State.Health.Status}}' xo-game
docker logs xo-game
```
The health status may take a few seconds to change to `healthy`.
5. Stop and remove the container
```powershell
docker stop xo-game
docker rm xo-game
```
🏗️ Run with Docker Compose
Clone or download this repository, then open PowerShell in the project directory.
Build and start:
```powershell
docker compose up --build -d
```
Check status and logs:
```powershell
docker compose ps
docker compose logs -f
```
Stop the application:
```powershell
docker compose down
```
🛠️ Build the Image Locally
From the directory containing the `Dockerfile`:
```powershell
docker build -t xo-game:1.0 .
docker run -d --name xo-game-local -p 8080:8080 xo-game:1.0
```
Open http://localhost:8080.
To clean up:
```powershell
docker stop xo-game-local
docker rm xo-game-local
```
If port `8080` is already in use, publish a different host port, for example `-p 8081:8080`, and visit http://localhost:8081.
📦 Publish an Updated Image to Docker Hub
Authenticate first:
```powershell
docker login
```
Build, tag, and push the image:
```powershell
docker build -t sivasankaran189/xo-game:1.0 .
docker push sivasankaran189/xo-game:1.0

docker tag sivasankaran189/xo-game:1.0 sivasankaran189/xo-game:latest
docker push sivasankaran189/xo-game:latest
```
Never commit Docker Hub passwords or access tokens to source control.
🐳 Docker Implementation
Image: `sivasankaran189/xo-game`
Container port: `8080`
Default host port: `8080`
Web server: Nginx unprivileged image
Health check: HTTP request to the local web server
Security: Runs as a non-root user and uses a read-only filesystem in the Compose configuration
Logging: Docker Compose configures log rotation
The frontend files are copied into the Nginx image, so users only need Docker to run the published container.
📁 Project Structure
```text
xo-game/
├── index.html       # Game interface
├── style.css        # Styling and responsive layout
├── app.js           # Game logic and score tracking
├── Dockerfile       # Builds the container image
├── nginx.conf       # Nginx web server configuration
├── compose.yaml     # Local Docker Compose setup
├── .dockerignore    # Excludes unnecessary build context files
└── README.md        # Project documentation
```
🎯 How to Play
Player X takes the first turn.
Players alternate placing X and O in empty cells.
The first player to align three matching symbols horizontally, vertically, or diagonally wins.
If all nine cells are filled and nobody has won, the round is a draw.
Select Restart round to play again or Reset scores to clear the scoreboard.
⚠️ Notes
Scores are stored in browser memory. Refreshing the page resets the scoreboard.
This is a local, two-player game on the same browser. It does not provide online multiplayer.
The game does not store personal information or use a database.
📄 License
Choose and add a license file before redistributing the project. If no license is included, assume that standard copyright applies.
---
Built as a hands-on project to practise Docker image creation, container execution, health checks, Nginx configuration, and Docker Hub publishing.