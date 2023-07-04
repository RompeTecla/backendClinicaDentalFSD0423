
const rolController = require("../controllers/rolController");
const isAdmin = require("../middlewares/isAdmin");
const verifyToken = require("../middlewares/verifyToken");
const router = require("express").Router();

// Rutas disponibles para el modelo Rol
router.post("/rols",verifyToken ,rolController.createRol)           // OK
router.get("/rols/:id", verifyToken,rolController.getRolById)       // OK

module.exports = router