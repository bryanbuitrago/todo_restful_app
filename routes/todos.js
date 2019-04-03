let express = require('express');
let router = express.Router();
let db = require('../models');



router.get('/', (req, res) => {
  // Get all TODOS from mongoDB
  db.Todo.find()
  .then( (todos) => res.json(todos))
  .catch((err) => res.send(err))
});

router.post('/', (req, res) => {
  // Create a todo
  db.Todo.create(req.body)
  .then((newTodo) => res.status(201).json(newTodo))
  .catch((err) => res.send(err));
});

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
