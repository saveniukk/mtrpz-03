const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const todoRoutes = require('./routes/routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/todos', todoRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB підключено'))
  .catch(err => console.error('Помилка підключення MongoDB', err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Сервер запущено на http://todo-backend:${PORT}`);
});
