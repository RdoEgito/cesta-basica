const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;

// Conexão com o banco de dados MongoDB
const connection = mongoose.createConnection('mongodb+srv://test:kwBe5Tn5FNs4XesI@cluster0.zj1tsoh.mongodb.net/?retryWrites=true&w=majority');
const db = connection.useDb('Test');

// Definindo um modelo de exemplo (um modelo de coleção)
const Todo = mongoose.model('Todo', { text: String });

app.use(cors());

// Rota para buscar todos os itens do banco de dados
app.get('/api/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/todos', async (req, res) => {
    try {
      const { text } = req.body;
      const newTodo = new Todo({ text });
      await newTodo.save();
      res.status(201).json(newTodo);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
