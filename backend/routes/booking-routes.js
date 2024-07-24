const express = require('express')
const bookingRouter = express.Router();
const { createBooking, getBookings, deleteBooking } = require('../controllers/booking-controller')

bookingRouter.post('/', createBooking)
bookingRouter.get('/', getBookings)
bookingRouter.delete('/delete/:id', deleteBooking)

module.exports = bookingRouter;