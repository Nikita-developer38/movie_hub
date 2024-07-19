const express = require('express');
const { getBollywood } = require('../controllers/bollywood_controller');
const bollywoodRouter = express.Router();



bollywoodRouter.get('/', getBollywood)


module.exports = bollywoodRouter;