const express = require ('express');
const {getMovies, getMoviesId, getMoviesTitle, getMoviesGenre, getMoviesYear, postMovies, deleteMovies, putMovies} = require ('../controllers/movies.controller');
const moviesRouter = express.Router();

moviesRouter.get("/", getMovies);
moviesRouter.get("/id/:id", getMoviesId);
moviesRouter.get("/title/:title", getMoviesTitle);
moviesRouter.get("/genre/:genre", getMoviesGenre);
moviesRouter.get("/year/:year'", getMoviesYear);
moviesRouter.post("/", postMovies);
moviesRouter.delete("/:id", deleteMovies);
moviesRouter.put("/:id", putMovies);
module.exports = moviesRouter; 