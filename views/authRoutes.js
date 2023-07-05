
const router = require("express").Router()
const authController = require("../controllers/authController");

// Ruta para la autenticación/login.

router.post("/login", authController.login);                                              // OK

module.exports = router