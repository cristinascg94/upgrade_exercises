const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const cinemaSchema = new Schema(
    {
        name: {type: String, require:true},
        location: {type: String, require:true},
        movies: [{type:Schema.Types.ObjectId,ref:"movies"}]
    },{
        timestamps: true,
    }
)

const Cinema = mongoose.model('cinemas', cinemaSchema);
module.exports = Cinema;