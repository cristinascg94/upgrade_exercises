const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {type: String, require: true},
    password: {type: String, require: true},
    name: {type: String, require: true},
    lastName: {type: String, require: true}
},
{timestamps: true}
)

const User = mongoose.model('User', userSchema);
module.exports = User;