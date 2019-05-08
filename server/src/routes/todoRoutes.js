const express = require('express');
const passport = require('passport');
const todoController = require('../controllers/todoController');
let Todo = require('../models/todo.model');
const { getIndex, getById, add, update } = todoController(Todo);
const todoRouter = express.Router();

todoRouter.route('/')
  .get(passport.authenticate('jwt', { session: false }), getIndex)
  .post(passport.authenticate('jwt', { session: false }), add);

todoRouter.route('/:id')
  .get(passport.authenticate('jwt', { session: false }), getById)
  .put(passport.authenticate('jwt', { session: false }), update);

module.exports = todoRouter;