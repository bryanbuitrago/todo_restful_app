// Schema
let mongoose = require('mongoose');

let todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Name can not be blank!',
  },
  completed: {
    type: Boolean,
    default: false
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

// Compile Into Model
let Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
