const mongoose = require('mongoose')

const bollywoodMetaSchema = new mongoose.Schema({


    imdb_id: {
        type: String

    },
    title: {
        type: String,

    },

    is_adult: {
        type: String
    },

    year_of_release: {
        type: String
    },
    runtime: {
        type: Number
    },
    genres: {
        type: Array
    },

});
module.exports = mongoose.model('bollywood_metas', bollywoodMetaSchema);