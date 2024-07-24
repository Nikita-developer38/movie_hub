const mongoose = require('mongoose');
const Booking = require("../modules/Booking");
const User = require("../modules/User");
const Movies = require("../modules/Movies");
require("dotenv").config();
const MONGODB_URL = process.env.MONGODB_URL;
mongoose.connect(MONGODB_URL)

const createBooking = async (req, res) => {
    if (!req.body.movie || !req.body.showTime || !req.body.Date) {
        return res.status(400).json({
            error: "Please provide movie, showTime, and Date"
        });
    }
    let existingMovie;
    let existingUser;
    try {
        existingMovie = await Movies.findById(req.body.movie);
        existingUser = await User.findById(req.body.user);
    }
    catch (err) {
        return res.status(500).json({
            error: err
        });
    }
    if (!existingMovie || !existingUser) {
        return res.status(404).json({
            error: "Movie or user not found"
        });
    }
    try {
        const booking = new Booking({
            movie: req.body.movie,
            showTime: req.body.showTime,
            Date: req.body.Date,
            seatNumber: req.body.seatNumber,
            user: req.body.user
        });
        const session = await mongoose.startSession();
        await session.startTransaction();

        existingUser.bookings.push(booking._id);
        existingMovie.bookings.push(booking._id);
        await existingUser.save({ session });
        await existingMovie.save({ session });
        await booking.save({ session });
        await session.commitTransaction();
        res.status(201).json({
            message: "Booking created successfully",
            data: booking
        });
    }
    catch (err) {
        console.error(err);

    }
}

const getBookings = async (req, res) => {
    Booking.find().then((data) => {
        res.status(200).json({
            message: "All Bookings",
            data
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Error fetching bookings"
        });
    });
}

const deleteBooking = async (req, res, next) => {
    const id = req.params.id;
    let booking;
    try {
        booking = await Booking.findOneAndDelete(id).populate("user movie");
        console.log(booking);
        const session = await mongoose.startSession();
        session.startTransaction();
        await booking.user.bookings.pull(booking._id);
        await booking.movie.bookings.pull(booking._id);
        await booking.movie.save({ session });
        await booking.user.save({ session });
        session.commitTransaction();
    } catch (err) {
        return console.log(err);
    }
    if (!booking) {
        return res.status(500).json({ message: "Unable to Delete" });
    }
    return res.status(200).json({ message: "Successfully Deleted" });
};



module.exports = { createBooking, getBookings, deleteBooking }