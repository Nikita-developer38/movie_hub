const Movie = require("../modules/Movies")
const Admin = require("../modules/Admin")
const jwt = require("jsonwebtoken")
const mongoose = require('mongoose');
require("dotenv").config();

const createMovie = async (req, res) => {
    const Authtoken = req.headers.authorization ? req.headers.authorization.split(" ")[1] : null;
    if (!Authtoken) {
        return res.status(401).json({ message: "Unauthorized1" });
    }
    const decoded = jwt.verify(Authtoken
        , process.env.SECRET_KEY);
    if (!decoded) {
        return res.status(401).json({ message: "Unauthorized2" });
    }
    const adminId = decoded.id;
    if (!adminId) {
        return res.status(401).json({ message: "Unauthorized3: No admin ID found" });
    }


    const movie = new Movie({
        title: req.body.title,
        description: req.body.description,
        actors: req.body.actors,
        releaseDate: req.body.releaseDate,
        posterUrl: req.body.posterUrl,
        featured: req.body.featured,
        admin: adminId

    });
    const session = await mongoose.startSession();
    try {
        session.startTransaction();
        await movie.save({ session });
        const adminUser = await Admin.findById(adminId);
        adminUser.addedMovies.push(movie._id);
        await adminUser.save({ session });
        await session.commitTransaction();
        res.status(201).json({
            message: "Movie created successfully",
            data: movie
        });
    } catch (error) {
        await session.abortTransaction();
        res.status(500).json({
            error: error
        });
    } finally {
        session.endSession();
    }

}
const getAllMovie = async (req, res) => {
    Movie.find().then((data) => {
        res.status(200).json({
            message: "All Movies",
            data
        });
    }).catch((error) => {
        res.status(500).json({
            error: error
        });
    });
}

const getMovieById = async (req, res) => {
    const id = req.params.id;
    Movie.findById(id).then((data) => {
        res.status(200).json({
            message: "Movie found",
            data: data

        });
    }).catch((error) => {
        res.status(500).json({
            error: error
        });
    });
}
module.exports = { createMovie, getAllMovie, getMovieById };