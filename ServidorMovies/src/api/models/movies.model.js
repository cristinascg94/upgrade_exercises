const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const moviesSchema = new Schema (
    {
        title: {type: String, require:true},
        director: {type: String},
        year: {type: Number},
        genre: {type: String, enum: ['Acción', 'Animación', 'Ciencia ficción', 'Comedia romántica']}
    },{
        timestamps: true,
    }
)

const Movies = mongoose.model('movies', moviesSchema);
module.exports = Movies;