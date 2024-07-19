const mongoose = require('mongoose')

const bollywoodSchema = new mongoose.Schema({


    title: {
        type: String,

    },
    imdb_id: {
        type: String

    },
    poster_path: {
        type: String
    },

    wiki_link: {
        type: String
    }
});
module.exports = mongoose.model('bollywood', bollywoodSchema);