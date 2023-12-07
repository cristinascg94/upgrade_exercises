const User = require ('../models/users.model')
const passport = require('passport');
const session = require("express-session");

const postUserRegister = (req, res, next) => {
    passport.authenticate('register', (error, user) => {
        if (error) {
            return next(error);
        }
        req.logIn(user, (error) => {
            if (error) {
                return next(error);
            }
            return res.status(200).json(user)
        });
    })(req);
}

// const postUserLogin = () => {

// };

// const postUserLogout =() => {

// };
module.exports = {postUserRegister};