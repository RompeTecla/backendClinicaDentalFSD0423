const router = require('express').Router();

const authRoutes = require("./views/authRoutes");
const userRoutes = require("./views/userRoutes");
const rolRoutes = require("./views/rolRoutes");
const treatmentRoutes = require("./views/treatmentRoutes");

router.use('/',authRoutes);
router.use('/',userRoutes);
router.use('/',rolRoutes);
router.use('/',treatmentRoutes);

module.exports = router;