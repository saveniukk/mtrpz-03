# ToDo List

This is a simple ToDo application built with the MERN stack (MongoDB, Express, React, Node.js). It allows users to:

- Create tasks
- Update task completion status
- Delete tasks

## Project Structure

```
├── client/          # React frontend
│   ├── components/  # Components: TodoForm, TodoItem, TodoList
│   ├── App.js       # Main component
│   ├── App.css      # Styles
│   ├── package.json
|   └── Dockerfile
├── server/          # Node.js backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
|   └── Dockerfile
├── docker-compose.yml
└── README.md
```

## Local Development with Docker

1. Clone the repository:

```bash
git clone https://github.com/saveniukk/mtrpz-03/js.git
cd mtrpz-03/js
```

2. Run with Docker Compose:

```bash
docker compose up --build
```

3. The app will be available at:

```
http://localhost:3000
```

## Dependencies

### Frontend (client)
- React
- Axios

### Backend (server)
- Express
- Mongoose
- CORS
- Dotenv

### Docker
Runs in 3 containers:
- MongoDB
- Backend (Node.js + Express)
- Frontend (React)

## `.env` file for Backend (`server/.env`)
```
MONGO_URI=mongodb://mongo:27017/todo_db
PORT=5000
```
