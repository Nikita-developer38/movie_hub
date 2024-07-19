const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const userRouter = require("./routes/user-routes");
const adminRouter = require('./routes/admin-routes');
const movieRouter = require('./routes/movie-routes');
const bookingRouter = require('./routes/booking-routes');
const bollywoodRouter = require('./routes/bollywood-routes')
const bollywoodMetaRouter = require('./routes/bollywoodMeta-routes')
const bollywoodTextRouter = require('./routes/bollywoodText-routes')

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingRouter);
app.use("/bollywood", bollywoodRouter)
app.use("/bollywoodMeta", bollywoodMetaRouter)
app.use("/bollywoodText", bollywoodTextRouter)


const mongodb_url = process.env.MONGODB_URL;




mongoose.connect(mongodb_url)
    .then(() => app.listen(5000, () => {
        console.log("Server is running on port 5000");
    }
    ))



