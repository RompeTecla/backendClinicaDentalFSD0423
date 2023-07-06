const router = require("express").Router();

const authRoutes = require("./views/authRoutes");
const rolRoutes = require("./views/rolRoutes");
const userRoutes = require("./views/userRoutes");
const pacientRoutes = require("./views/pacientRoutes");
const historyRoutes = require("./views/historyRoutes");
const appointmentRoutes = require("./views/appointmentRoutes");
const dentistRoutes = require("./views/dentistRoutes");
const specialityRoutes = require("./views/specialityRoutes");
const treatmentRoutes = require("./views/treatmentRoutes");
const paymentRoutes = require("./views/paymentRoutes");

router.use("/", authRoutes);
router.use("/", rolRoutes);
router.use("/", userRoutes);
router.use("/", pacientRoutes);
router.use("/", historyRoutes);
router.use("/", appointmentRoutes);
router.use("/", dentistRoutes);
router.use("/", specialityRoutes);
router.use("/", treatmentRoutes);
router.use("/", paymentRoutes);

module.exports = router;
