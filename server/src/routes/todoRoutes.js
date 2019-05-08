const express = require('express');
const todoRouter = express.Router();
const todoController = require('../controllers/todoController');
let Todo = require('../models/todo.model');

const { getIndex, getById, add, update } = todoController(Todo);

todoRouter.route('/')
  .get(getIndex)
  .post(add);

todoRouter.route('/:id')
  .get(getById)
  .put(update);

module.exports = todoRouter;