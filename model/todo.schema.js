const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    title: String,
    todo: String,
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model("todo-list", TodoSchema);

module.exports = Todo;
