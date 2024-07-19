const mongoose = require('mongoose')

const bollywoodTextSchema = new mongoose.Schema({


    imdb_id: {
        type: String

    },
    story: {
        type: String,

    },
    summary: {
        type: String
    },


    actors: {
        type: Array
    },

    release_date: {
        type: Date
    }


});
module.exports = mongoose.model('bollywood_texts', bollywoodTextSchema);