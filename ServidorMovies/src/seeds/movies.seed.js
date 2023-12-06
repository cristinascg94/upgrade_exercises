const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const Movies = require("../api/models/movies.model")
const DB_URL = process.env.DB_URL;

const arrayMovies = [
    {
      title: 'The Matrix',
      director: 'Hermanas Wachowski',
      year: 1999,
      genre: 'Acción',
    },
    {
      title: 'The Matrix Reloaded',
      director: 'Hermanas Wachowski',
      year: 2003,
      genre: 'Acción',
    },
    {
      title: 'Buscando a Nemo',
      director: 'Andrew Stanton',
      year: 2003,
      genre: 'Animación',
    },
    {
      title: 'Buscando a Dory',
      director: 'Andrew Stanton',
      year: 2016,
      genre: 'Animación',
    },
    {
      title: 'Interestelar',
      director: 'Christopher Nolan',
      year: 2014,
      genre: 'Ciencia ficción',
    },
    {
      title: '50 primeras citas',
      director: 'Peter Segal',
      year: 2004,
      genre: 'Comedia romántica',
    },
  ];

  mongoose.connect(DB_URL).then(async () => {
    const allMovies = await Movies.find();
    if(allMovies.length > 0) {
        await Movies.collection.drop();
        console.log('movies borrados');
    }
  })
  .catch((error) => console.log("error borrando Movies", error))
  .then (async () => {
    const movieMap = arrayMovies.map((movie) => new Movies(movie));
    await Movies.insertMany(movieMap);
    console.log('movies insertadas');
  })
  .catch((error) => console.log('error insertando movies', error))
  .finally(() => mongoose.disconnect());