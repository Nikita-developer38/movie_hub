const mongoose = require('mongoose')
const adminSchema = new mongoose.Schema({

    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    addedMovies: [{
        type: mongoose.Types.ObjectId,
        ref: "Movies"
    }]
});
module.exports = mongoose.model('Admin', adminSchema);