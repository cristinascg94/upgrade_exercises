const express = require ('express');
const {getCinema, postCinema, deleteCinema, putCinema} = require ('../controllers/cinema.controller');
const cinemaRouter = express.Router();

cinemaRouter.get("/",getCinema);
cinemaRouter.post("/", postCinema)
cinemaRouter.delete("/:id", deleteCinema)
cinemaRouter.put("/:id", putCinema)


module.exports = cinemaRouter; 