let express = require('express');
let router = express.Router();
let db = require('../models');



// Get all todos
router.get('/', (req, res) => {
  db.Todo.find()
  .then( (todos) => res.json(todos))
  .catch((err) => res.send(err))
});

// Create a todo
router.post('/', (req, res) => {
  db.Todo.create(req.body)
  .then((newTodo) => res.status(201).json(newTodo))
  .catch((err) => res.send(err));
});

// Find a todo
router.get('/:todoId', (req, res) => {
  db.Todo.findById(req.params.todoId)
  .then((foundTodo) => res.status(201).json(foundTodo))
  .catch((err) => res.send(err));
});

// Update a todo
router.put('/:todoId', (req, res) =>{
  db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
  .then((todo) => res.json(todo))
  .catch((err) => res.send(err));
});
module.exports = router;
