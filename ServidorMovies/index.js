const express = require ("express");
const dotenv = require ("dotenv");
dotenv.config();

const moviesRouter = require ('./src/api/routes/movies.routes')
const cinemaRouter = require ('./src/api/routes/cinema.routes')

const {connect} = require('./src/utils/db')

const PORT = process.env.PORT;

const app = express ();
connect();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/movies', moviesRouter);
app.use('/cinemas', cinemaRouter);

app.listen(PORT, () => console.log(`escuchando en el puesto http://localhost:${PORT}`))