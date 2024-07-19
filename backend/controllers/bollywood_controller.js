const Bollywood = require('../modules/Bollywood')
const BollywoodText = require('../modules/Bollywood_text')
const BollywoodMeta = require('../modules/Bollywood_meta')

const getBollywood = async (req, res) => {
    Bollywood.aggregate([
        {
            $lookup: {
                from: "bollywood_texts",
                localField: "imdb_id",
                foreignField: "imdb_id",
                as: "bollywood_text"
            }
        },
        {
            $lookup: {
                from: "bollywood_metas",
                localField: "imdb_id",
                foreignField: "imdb_id",
                as: "bollywood_meta"
            }
        }
    ]).exec().then((data) => {
        res.status(200).json({
            message: "All Bollywood Movies",
            data
        })
    }).catch(err => {
        res.status(500).json({
            message: "Error while fetching data",
            err
        })
    })

}



module.exports = {
    getBollywood,

}