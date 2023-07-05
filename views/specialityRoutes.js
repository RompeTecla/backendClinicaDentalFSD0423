const specialityController = require("../controllers/specialityController");
const isAdmin = require("../middlewares/isAdmin");
const isDentist = require("../middlewares/isDentist");
const auth = require("../middlewares/verifyToken");
const router = require("express").Router();

// Rutas disponibles para el modelo Especialidad.

router.post("/specialities", auth,isAdmin,specialityController.createSpeciality)
router.get("/specialities/:id", auth,isDentist,specialityController.getSpecialityById)

module.exports = router