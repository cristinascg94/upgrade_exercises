const express = require ("express");
const session = require("express-session");
const dotenv = require ("dotenv");
dotenv.config();

const passport = require('passport');
require('./src/authentication/passports');


const moviesRouter = require ('./src/api/routes/movies.routes')
const cinemaRouter = require ('./src/api/routes/cinema.routes')
const userRouter = require('./src/api/routes/user.routes')

const {connect} = require('./src/utils/db')

const PORT = process.env.PORT;

const app = express ();
connect();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(passport.initialize());

app.use('/movies', moviesRouter);
app.use('/cinemas', cinemaRouter);
app.use('/users', userRouter);

app.listen(PORT, () => console.log(`escuchando en el puesto http://localhost:${PORT}`))