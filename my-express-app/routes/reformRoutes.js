const express= require("express")
const router = express()
const reformController = require("../controllers/reformController")
const authMiddleware = require("../middlewares/authMiddleware")

//rutas
router.get("/client/reforms/:reformId", authMiddleware, reformController.getReformById)
router.post("/client/:clientId/reforms", authMiddleware, reformController.addReform)

module.exports= router