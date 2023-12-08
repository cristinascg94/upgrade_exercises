const express = require ("express");
const session = require("express-session");
const dotenv = require ("dotenv");
dotenv.config();
const MongoStore = require('connect-mongo');

const passport = require('passport');
require('./src/authentication/passports');

const moviesRouter = require ('./src/api/routes/movies.routes');
const cinemaRouter = require ('./src/api/routes/cinema.routes');
const userRouter = require('./src/api/routes/user.routes');

const {connect} = require('./src/utils/db');

const PORT = process.env.PORT;

const app = express ();
connect();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(
    session({
      secret: 'upgradehub_node', // ¡Este secreto tendremos que cambiarlo en producción!
      resave: false, // Solo guardará la sesión si hay cambios en ella.
      saveUninitialized: false, // Lo usaremos como false debido a que gestionamos nuestra sesión con Passport
      cookie: {
        maxAge: 3600000 // Milisegundos de duración de nuestra cookie, en este caso será una hora.
      },
      store: MongoStore.create({
        mongoUrl: process.env.DB_URL,
      })
    })
  );

app.use(passport.initialize());
app.use(passport.session());

app.use('/movies', moviesRouter);
app.use('/cinemas', cinemaRouter);
app.use('/users', userRouter);

app.use((err, req, res, next) =>{
    return res.status(err.status || 500).json(err.message || 'Unexpected error');
});

app.listen(PORT, () => console.log(`escuchando en el puesto http://localhost:${PORT}`))