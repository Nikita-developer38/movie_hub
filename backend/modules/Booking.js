const mongoose = require('mongoose')
const bookingSchema = new mongoose.Schema({

    movie: {
        type: mongoose.Types.ObjectId,
        ref: 'Movie',
        required: true
    },
    showTime: {
        type: String,
        required: true
    },


    Date: {
        type: Date,
        required: true
    },
    seatNumber: {
        type: String,
        required: true
    },

    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }

});
module.exports = mongoose.model('Booking', bookingSchema);