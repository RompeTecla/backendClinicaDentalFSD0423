
const auth = require("../controllers/auth");
const router = require("express").Router()

// Ruta para la autenticación
router.post("/login", auth.login);

module.exports = router