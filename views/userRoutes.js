const userController = require("../controllers/userController");
const isAdmin = require("../middlewares/isAdmin");
const auth = require('../middlewares/verifyToken');
const router = require("express").Router();

// Rutas disponibles para el modelo Usuario.

router.post("/users/reg", userController.createUser)                                 //OK
router.get("/users/all", auth, userController.getUser)                               //OK
router.get("/users", auth, userController.getUserById)                               //OK
router.put("/users", auth, userController.putUserById)                               //OK
router.delete("/users/:id", auth, isAdmin, userController.deleteUserById)            //OK

module.exports = router