const express = require('express')
const bookingRouter = express.Router();
const { createBooking, getBookings } = require('../controllers/booking-controller')

bookingRouter.post('/', createBooking)
bookingRouter.get('/', getBookings)

module.exports = bookingRouter;