const Cinema = require ('../models/cinema.model');
const { putMovies } = require('./movies.controller');


const getCinema = async (req, res) => {
    try {
        console.log("Hola");
        const allCinemas = await Cinema.find().populate("movies", "title director");
        return res.status(200).json(allCinemas);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const postCinema = async (req, res) => {
    try {
        const newCinema = new Cinema(req.body);
        const createdCinema = await newCinema.save();
        return res.status(200).json(createdCinema);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteCinema = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedCinema =await Cinema.findByIdAndDelete(id);
        if (!deletedCinema) {
            return res.status(404).json({message: "el id del cine no existe"})
        }
        return res.status(200).json(deleteCinema);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const putCinema =async (req, res) => {
    try {
        const {id} =req.params;
        const putCinemas = new Cinema(req.body);
        putCinemas._id= id;
        const updatedCinema = await Cinema.findByIdAndUpdate(id, putCinemas, {new: true});
        if (!updatedCinema) {
            return res.status(404).json({message:"el id del cine no existe"})
        }
        return res.status(200).json(updatedCinema);
    } catch (error) {
        return res.status(500).json(error);
    }
}
module.exports = {getCinema, postCinema, deleteCinema, putCinema};
