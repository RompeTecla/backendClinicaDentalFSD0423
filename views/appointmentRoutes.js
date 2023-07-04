const appointmentController = require("../controllers/appointmentController");
const isDentist = require("../middlewares/isDentist");
const verifyToken = require("../middlewares/verifyToken");
const router = require("express").Router();

// Rutas disponibles para Appointments
router.post("/appointments", verifyToken,appointmentController.createAppointment)                   // OK
router.get("/appointments/doctor", verifyToken,isDentist,appointmentController.getAppointment)      // OK
router.get("/appointments", verifyToken,appointmentController.getAppointmentById)                   // OK
router.put("/appointments/:id", verifyToken,appointmentController.putAppointmentById)               // OK
router.delete("/appointments/:id", verifyToken,appointmentController.deleteAppointmentById)         // OK
router.get("/appointments/alldoctor", verifyToken,appointmentController.getAppointmentAsDoctor)     // OK


module.exports = router;