const express = require('express');
const passport = require('passport');
const {postUserRegister, postUserLogin, postUserLogout} = require ('../controllers/user.controller')

const userRouter = express.Router();

userRouter.post("/register", postUserRegister);
userRouter.post("/login", postUserLogin);
userRouter.post("/logout", postUserLogout);

module.exports = userRouter;