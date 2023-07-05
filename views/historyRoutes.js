const historyController = require("../controllers/historyController");
const isDentist = require("../middlewares/isDentist");
const auth = require("../middlewares/verifyToken");
const router = require("express").Router();

// Rutas disponibls para el modelo Historial.
router.post("/histories", auth,historyController.createHistory)
router.get("/histories/:id", auth,historyController.getHistorytById)
router.put("/histories/:id", auth,isDentist, historyController.putHistoryById)


module.exports = router