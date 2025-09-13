const express = require('express');
const app = express();
app.use(express.json());

let todos = [];
let nextId = 1;

// create a new todo
app.post('/api/todos', (req, res) => {
  const { title } = req.body;

  if (!title || typeof title !== 'string' || title.trim() === '') {
    return res.status(400).json({ error: 'INVALID_TITLE' });
  }

  const newTodo = {
    id: nextId++,
    title: title.trim(),
    done: false,
    createdAt: new Date().toISOString()
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});


app.listen(3000, () => console.log('Server running on port 3000'));