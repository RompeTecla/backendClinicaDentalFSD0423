
const treatmentController = require("../controllers/treatmentController");
const isDentist = require("../middlewares/isDentist");
const auth = require("../middlewares/verifyToken");
const router = require("express").Router();

// Rutas disponibles para el modelo Tratamiento solo para usuario con Token verificado y rol de Dentista.
router.post("/treatments", auth, isDentist, treatmentController.createTreatment)             //OK
router.get("/treatments/all", auth, isDentist, treatmentController.getAllTreatments)
router.get("/treatments/:id", auth, isDentist,treatmentController.getTreatmentById)          //OK
router.put("/treatments/:id", auth, isDentist,treatmentController.putTreatmentById)          //OK
router.delete("/treatments/:id", auth, isDentist,treatmentController.deleteTreatmentById)



module.exports = router