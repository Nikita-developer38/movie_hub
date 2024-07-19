const express = require('express');
const { getBollywoodMeta } = require('../controllers/bollywoodMeta_controller');

const bollywoodMetaRouter = express.Router();



bollywoodMetaRouter.get('/', getBollywoodMeta)


module.exports = bollywoodMetaRouter;