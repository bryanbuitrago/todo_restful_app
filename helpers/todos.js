let db = require('../models');

// Get all todos
exports.getTodos = (req, res) => {
  db.Todo.find()
  .then( (todos) => res.json(todos))
  .catch((err) => res.send(err))
};

// Create a todo
exports.createTodo = (req, res) => {
  db.Todo.create(req.body)
  .then((newTodo) => res.status(201).json(newTodo))
  .catch((err) => res.send(err));
};

// Get a todo
exports.getTodo = (req, res) => {
  db.Todo.findById(req.params.todoId)
  .then((foundTodo) => res.status(201).json(foundTodo))
  .catch((err) => res.send(err));
};

// Update a todo
exports.updateTodo = (req, res) =>{
  db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
  .then((todo) => res.json(todo))
  .catch((err) => res.send(err));
};

// Delete a todo
exports.deleteTodo = (req, res) => {
  db.Todo.deleteOne({_id: req.params.todoId})
  .then(() => res.json({message: 'Todo was deleted'}))
  .catch((err) => res.send(err));
};
module.exports = exports;
