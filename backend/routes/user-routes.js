const express = require('express');
const userRouter = express.Router();
const { getAllUsers, addUser, updateUser, deleteUser, login, getBookingsofUser } = require('../controllers/user-controller')

userRouter.get("/", getAllUsers)
userRouter.post("/signup", addUser)
userRouter.put("/:id", updateUser)
userRouter.delete("/delete/:id", deleteUser)
userRouter.post("/login", login)
userRouter.get("/getBookings/:id", getBookingsofUser)
module.exports = userRouter;