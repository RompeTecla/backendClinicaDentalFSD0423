const userController = require("../controllers/userController");
const isAdmin = require("../middlewares/isAdmin");
const verifyToken = require('../middlewares/verifyToken');
const router = require("express").Router();

// Rutas disponibles para el modelo Usuario
router.post("/users/reg", userController.createUser)                                        //OK
router.get("/users/all", verifyToken, userController.getUser)                               //OK
router.get("/users", verifyToken, userController.getUserById)                               //OK
router.put("/users", verifyToken, userController.putUserById)                               //OK
router.delete("/users/:id", verifyToken, isAdmin, userController.deleteUserById)            //OK

module.exports = router