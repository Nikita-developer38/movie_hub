const User = require('../modules/User');
const Booking = require('../modules/Booking');
const bcrypt = require('bcryptjs');
const getAllUsers = async (req, res, next) => {
    User.find().then((data) => {
        res.status(200).json({
            message: "Users fetched successfully!",
            users: data
        })
    }).catch((err) => {
        res.status(500).json({
            message: "Fetching users failed!"
        })
    })

}

const addUser = async (req, res) => {
    const { name, email, password } = req.body;
    const salt = 10;
    const hash = await bcrypt.hash(password, salt);

    const user = new User({
        name,
        email,
        password: hash
    });

    try {
        const savedUser = await user.save();
        res.status(201).json({
            message: "User added successfully!",
            user: savedUser
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Adding user failed!"
        });
    }
};
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const salt = 10;
    const hash = await bcrypt.hash(password, salt);


    User.findByIdAndUpdate(id).then((data) => {
        data.name = name ? name : data.name;
        data.email = email ? email : data.email;
        data.hash = hash ? hash : data.hash;
        data.save().then((data) => {
            res.status(200).json({

                message: "User updated",
                user: data

            })

        })

    }).catch((err) => {
        res.status(500).json({
            message: "User not found"
        })
    }
    )


}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    User.findByIdAndDelete(id).then((data) => {
        res.status(200).json({
            message: "User deleted"
        })
    }).catch((err) => {
        res.status(500).json({
            message: "User not found"
        })
    })
}
const login = async (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email }).then((data) => {



        if (data) {
            bcrypt.compare(password, data.password)
                .then((result) => {
                    if (result) {
                        res.status(200).json({
                            message: "Login successful!"
                        });
                    } else {
                        res.status(401).json({
                            message: "Login failed!"
                        });
                    }
                });
        }
    })

}


const getBookingsofUser = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await Booking.find({ user: id });

        res.status(200).json({
            message: "Your Bookings",
            data,
        });

    } catch (err) {
        res.status(400).json({
            error: err,
        });
    }
};

module.exports = {
    getAllUsers,
    addUser,
    updateUser,
    deleteUser, login, getBookingsofUser
};