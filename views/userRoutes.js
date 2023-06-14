const userController = require("../controllers/userController");
const isAdmin = require("../middlewares/isAdmin");
const verifyToken = require('../middlewares/verifyToken');
const router = require("express").Router();

// Rutas disponibles para el modelo Usuario
router.post("/users/reg", userController.createUser)                                        //OK
router.get("/users/all", verifyToken, isAdmin, userController.getUser)
router.get("/users/", verifyToken, isAdmin, userController.getUserById)
router.put("/users", verifyToken ,userController.putUserById)
router.delete("/users/:id", verifyToken, userController.deleteUserById)

module.exports = router