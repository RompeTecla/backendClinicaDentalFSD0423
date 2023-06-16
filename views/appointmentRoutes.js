const appointmentController = require("../controllers/appointmentController");
const isDentist = require("../middlewares/isDentist");
const verifyToken = require("../middlewares/verifyToken");
const router = require("express").Router();

// All available routes for the model Appointment
router.post("/appointments", verifyToken, appointmentController.createAppointment)
router.get("/appointments/all", verifyToken, isDentist, appointmentController.getAppointment)
router.get("/appointments/:id", verifyToken, appointmentController.getAppointmentById)
router.put("/appointments/:id", verifyToken, isDentist, appointmentController.putAppointmentById)
router.delete("/appointments/:id", verifyToken, appointmentController.deleteAppointmentById)
router.delete("/appointments/:id", verifyToken, isDentist, appointmentController.deleteAppointmentById)


module.exports = router