const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")
const authMiddleware = require("../middlewares/authMiddleware")

router.post("/register", userController.registerUser)
router.post("/login", userController.loginUser)
router.post("/logout", authMiddleware, userController.logoutUser)
router.get("/dashboard/:userId", authMiddleware, userController.dashboardUser)
router.get("/users", userController.getUsers)

module.exports = router