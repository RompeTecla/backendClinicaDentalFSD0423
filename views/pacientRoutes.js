const pacientController = require("../controllers/pacientController");
const isAdmin = require("../middlewares/isAdmin");
const isDentist = require("../middlewares/isDentist");
const auth = require("../middlewares/verifyToken");
const router = require("express").Router();

// Rutas disponibles para el modelo Pacientes. Solo disponibles con Token de usuario.

router.post("/pacients", auth,pacientController.createPacient)
router.get("/pacients", auth, isDentist,pacientController.getPacient)
router.get("/pacients/:id", auth,pacientController.getPacientById)
router.put("/pacients/:id", auth,pacientController.putPacientById)
router.delete("/pacients/:id", auth,isAdmin, pacientController.deletePacientById)


module.exports = router