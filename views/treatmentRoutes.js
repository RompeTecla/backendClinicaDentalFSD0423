
const treatmentController = require("../controllers/treatmentController");
const isDentist = require("../middlewares/isDentist");
const verifyToken = require("../middlewares/verifyToken");
const router = require("express").Router();

// Rutas disponibles para el modelo Tratamiento solo para usuario con Token verificado y rol de Dentista.
router.post("/treatments", verifyToken, isDentist, treatmentController.createTreatment)             //OK
router.get("/treatments/all", verifyToken, isDentist, treatmentController.getAllTreatments)
router.get("/treatments/:id", verifyToken, isDentist,treatmentController.getTreatmentById)          //OK
router.put("/treatments/:id", verifyToken, isDentist,treatmentController.putTreatmentById)          //OK
router.delete("/treatments/:id", verifyToken, isDentist,treatmentController.deleteTreatmentById)



module.exports = router