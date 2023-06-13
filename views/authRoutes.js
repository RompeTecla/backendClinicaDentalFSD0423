

const authController = require("../controllers/authController");
const router = require("express").Router()

// Ruta para la autenticación
router.post("/login", authController.login);

module.exports = router