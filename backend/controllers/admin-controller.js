const Admin = require('../modules/Admin')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config();

const getAllAdmins = async (req, res, next) => {
    Admin.find().then((data) => {
        res.status(200).json({
            message: "Admins fetched successfully!",
            admins: data
        })
    }).catch((err) => {
        res.status(500).json({
            message: "Fetching admins failed!"
        })
    })

}


const addAdmin = async (req, res) => {
    const { email, password } = req.body;
    const salt = 10;
    const hash = await bcrypt.hash(password, salt);

    const admin = new Admin({ // Use Admin model instead of User
        email,
        password: hash
    });

    try {
        const savedAdmin = await admin.save();
        res.status(201).json({
            message: "Admin added successfully!",
            admin: savedAdmin
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Adding admin failed!"
        });
    }
};

const updateAdmin = async (req, res) => {
    const { id } = req.params;
    const { email, password } = req.body;
    const salt = 10;
    const hash = await bcrypt.hash(password, salt);
    const admin = new Admin({
        email,
        password: hash
    });
    try {
        const updatedAdmin = await Admin
            .findByIdAndUpdate(id, admin, { new: true });
        res.status(200).json({
            message: "Admin updated",
            admin: updatedAdmin
        })
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Updating admin failed!"
        });
    }
}
const deleteAdmin = async (req, res) => {
    const { id } = req.params;
    try {
        await Admin.findByIdAndDelete(id);
        res.status(200).json({
            message: "Admin deleted"
        })
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Deleting admin failed!"
        });
    }
}
const login = async (req, res) => {
    const { email, password } = req.body;
    Admin.findOne({ email: email }).then((data) => {
        bcrypt.compare(password, data.password).then((match) => {
            if (match) {
                const secretKey = process.env.SECRET_KEY
                const token = jwt.sign({ email: data.email, id: data._id }, secretKey, {
                    expiresIn: "1d",
                });

                res.status(200).json({
                    message: "Login successfull",
                    token,
                    id: data._id,


                })

            } else {
                res.status(401).json({
                    message: "Login failed"
                })
            }
        })
    }).catch((err) => {
        res.status(500).json({
            message: "Login failed"
        })
    })
}


module.exports = { getAllAdmins, addAdmin, updateAdmin, deleteAdmin, login }
