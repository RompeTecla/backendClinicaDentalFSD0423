const dentistController = require("../controllers/dentistController");
const isAdmin = require("../middlewares/isAdmin");
const auth = require("../middlewares/verifyToken");
const router = require("express").Router();

// Rutas disponibles para el modelo Dentistas.

router.post("/dentists", auth, dentistController.createDentist)
router.get("/dentists", auth, dentistController.getDentist)
router.get("/dentists/:id", auth, dentistController.getDentistById)
router.put("/dentists/:id", auth, dentistController.putDentistById)
router.delete("/dentists/:id", auth, isAdmin, dentistController.deleteDentistsById)

module.exports = router