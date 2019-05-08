const express = require('express');
const authController = require('../controllers/authController');
let User = require('../models/user.model');
const { signUp, signIn } = authController(User);
const authRouter = express.Router();

authRouter.route('/signUp').post(signUp);

authRouter.route('/signIn').post(signIn);

module.exports = authRouter;