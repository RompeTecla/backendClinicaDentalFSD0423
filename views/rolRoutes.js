
const rolController = require("../controllers/rolController");
const isAdmin = require("../middlewares/isAdmin");
const verifyToken = require("../middlewares/verifyToken");
const router = require("express").Router();

// Rutas disponibles para el modelo Rol
router.post("/rol/create", verifyToken, isAdmin, rolController.createRol)
router.get("/rol/:id", verifyToken, rolController.getRolById)

module.exports = router