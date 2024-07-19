const express = require('express');
const adminRouter = express.Router();
const { getAllAdmins, addAdmin, updateAdmin, deleteAdmin, login } = require('../controllers/admin-controller')

adminRouter.get("/", getAllAdmins)
adminRouter.post("/signup", addAdmin)
adminRouter.put("/:id", updateAdmin)
adminRouter.delete("/delete/:id", deleteAdmin)
adminRouter.post("/login", login)
module.exports = adminRouter;