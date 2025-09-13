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

// update todo done status (true or false)
app.patch('/api/todos/:id/status', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { done } = req.body;

  if (typeof done !== 'boolean') {
    return res.status(400).json({ error: 'INVALID_DONE_STATUS' });
  }

  const todo = todos.find(t => t.id === id);

  if (!todo) {
    return res.status(404).json({ error: 'TODO_NOT_FOUND' });
  }

  todo.done = done;
  res.json(todo);
});

// update todo title
app.patch('/api/todos/:id/title', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { title } = req.body;

  if (!title || typeof title !== 'string' || title.trim() === '') {
    return res.status(400).json({ error: 'INVALID_TITLE' });
  }

  const todo = todos.find(t => t.id === id);

  if (!todo) {
    return res.status(404).json({ error: 'TODO_NOT_FOUND' });
  }

  todo.title = title.trim();
  res.json(todo);
});

// get all todos
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.listen(3000, () => console.log('Server running on port 3000'));