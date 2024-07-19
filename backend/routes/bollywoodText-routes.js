const express = require('express');
const { getBollywoodText } = require('../controllers/bollywoodText-controller');


const bollywoodTextRouter = express.Router();



bollywoodTextRouter.get('/', getBollywoodText)


module.exports = bollywoodTextRouter;