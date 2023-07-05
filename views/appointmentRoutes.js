const appointmentController = require("../controllers/appointmentController");
const isDentist = require("../middlewares/isDentist");
const auth = require("../middlewares/verifyToken");
const router = require("express").Router();

// Rutas disponibles para Appointments.

router.post("/appointments", auth,appointmentController.createAppointment)                   // OK
router.get("/appointments/doctor",auth,isDentist,appointmentController.getAppointment)      // OK
router.get("/appointments", auth,appointmentController.getAppointmentById)                   // OK
router.put("/appointments/:id", auth,appointmentController.putAppointmentById)               // OK
router.delete("/appointments/:id", auth,appointmentController.deleteAppointmentById)         // OK
router.get("/appointments/alldoctor", auth,appointmentController.getAppointmentAsDoctor)     // OK


module.exports = router;