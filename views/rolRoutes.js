
const rolController = require("../controllers/rolController");
const isAdmin = require("../middlewares/isAdmin");
const auth = require("../middlewares/verifyToken");
const router = require("express").Router();

// Rutas disponibles para el modelo Rol.

router.post("/rols",auth, isAdmin ,rolController.createRol)           // OK
router.get("/rols/:id", auth, isAdmin,rolController.getRolById)       // OK

module.exports = router