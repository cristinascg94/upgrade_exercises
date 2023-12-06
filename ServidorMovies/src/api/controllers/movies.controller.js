const Movies = require ('../models/movies.model')


const getMovies = async (req, res) => {
    try {
        const allMovies = await Movies.find();
        return res.status(200).json(allMovies);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getMoviesId = async (req, res) => {
    try {
        const {id} = req.params;
        const movieId = await Movies.findById(id);
        if (!movieId){
            return res.status(404).json({message:"el id de la pelicula no existe"})
        }
        return res.status(200).json(movieId);
    } catch (error) {
        return res.status(500),json(error);
    }
};

const getMoviesTitle = async (req, res) => {
    try {
        const {title} = req.params;
        const movieTitle = await Movies.find({title});
        if (!movieTitle){
            return res.status(404).json({message:"el titulo de la pelicula no existe"})
        }
        return res.status(200).json(movieTitle);
    } catch (error) {
        return res.status(500),json(error);
    }
};

const getMoviesGenre = async(req, res) =>{
    try {
        const {genre} = req.params;
        const movieGenre = await Movies.find({genre});
        if (!movieGenre){
            return res.status(404).json({message:"el género de la pelicula no existe"})
        }
        return res.status(200).json(movieGenre);
    } catch (error) {
        return res.status(500),json(error);
    }
};

const getMoviesYear = async (req, res) => {
    try {
        const {year} = req.params;
        const movieYear = await Movies.find({year: {$gtyear}});
        if (!movieYear){
            return res.status(404).json({message:`no existe peliculas producidas despues del año ${year}`})
        }
        return res.status(200).json(movieYear);
    } catch (error) {
        return res.status(500),json(error);
    }
};

const postMovies = async (req, res) => {
    try {
        console.log(req.body);
        const newMovie = new Movies(req.body);
        const createdMovie = await newMovie.save();
        return res.status(201).json(createdMovie);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteMovies = async (req, res) => {
    console.log(req.params.id)
    try {
        const {id} =req.params;
        const deletedMovie = await Movies.findByIdAndDelete(id);
        if (!deletedMovie) {
            return res.status(404).json({message:"el id de la pelicula no existe"});
        }
        return res.status(200).json(deletedMovie);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const putMovies = async (req, res) => {
    try {
        const { id } = req.params;
        const putMovie = new Movies(req.body);
        putMovie._id= id;
        const updatedMovie =await Movies.findByIdAndUpdate(id, putMovie, {new:true});
        if (!updatedMovie) {
            return res.status(404).json({message: "el id de la pelicula no existe"});
        }
        return res.status(200).json(updatedMovie);
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = {getMovies, getMoviesId, getMoviesTitle, getMoviesGenre, getMoviesYear, postMovies, deleteMovies, putMovies};