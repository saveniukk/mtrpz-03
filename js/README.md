# ToDo List

Це простий ToDo-додаток, створений на стеку MERN (MongoDB, Express, React, Node.js), що дозволяє:
- створювати задачі
- оновлювати статус виконання
- видаляти задачі

## Структура проєкту

```
├── client/          # React frontend
│   ├── components/  # Компоненти: TodoForm, TodoItem, TodoList
│   ├── App.js       # Основний компонент
│   ├── App.css      # Стилі
│   └── package.json
├── server/          # Node.js backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
├── docker-compose.yml
└── README.md
```

## Інструкція локального запуску з Docker

### 1. Клонуйте репозиторій:
```bash
git clone https://github.com/saveniukk/mtrpz-03/js.git
cd mtrpz-03/js
```

### 2. Запуск через Docker Compose:
```bash
docker-compose up --build
```

### 3. Додаток буде доступний за адресою:
- http://localhost:3000

## Залежності

### Frontend (client)
- React
- Axios

### Backend (server)
- Express
- Mongoose
- CORS
- Dotenv

## Docker

- Працює в 3 контейнерах:
  - MongoDB
  - Backend (Node.js + Express)
  - Frontend (React)

## .env файл для backend (`server/.env`)
```
MONGO_URI=mongodb://mongo:27017/todo_db
PORT=5000
```