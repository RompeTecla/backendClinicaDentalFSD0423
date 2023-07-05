const paymentController = require("../controllers/paymentController");
const auth = require("../middlewares/verifyToken");
const router = require("express").Router();

// Rutas disponibles para el modelo de Pagos.
router.post("/payments", auth,paymentController.createPayment)
router.get("/payments/:id", auth,paymentController.getPaymentById)


module.exports = router