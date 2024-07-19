const express = require('express');
const movieRouter = express.Router();
const { createMovie, getAllMovie, getMovieById } = require('../controllers/movie-controller')

movieRouter.post("/", createMovie)
movieRouter.get('/getAllMovies', getAllMovie)
movieRouter.get('/:id', getMovieById)

module.exports = movieRouter;