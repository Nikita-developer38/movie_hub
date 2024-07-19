const BollywoodText = require('../modules/Bollywood_text')

const getBollywoodText = async (req, res) => {
    BollywoodText.find().then((data) => {
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
    getBollywoodText,

}