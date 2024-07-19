const BollywoodMeta = require('../modules/Bollywood_meta')

const getBollywoodMeta = async (req, res) => {
    BollywoodMeta.find().then((data) => {
        res.status(200).json({
            message: "All Bollywood Meta Movies",
            data
        });
    }
    ).catch((error) => {
        res.status(500).json({
            error: error
        });
    });

}



module.exports = {
    getBollywoodMeta,

}