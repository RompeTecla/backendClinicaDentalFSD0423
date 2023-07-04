const isDentist = (req, res, next) => {
  try {
    //Si el rolId no es 2, verificará que no eres Administrador.
    if (req.rolId !== 2) {
      return res.status(403).json({
        success: true,
        message: "No tienes permisos.",
      });
    }
    // console.log(`Esto es el rolid ${req.rolId}`)
    next();
    //Recoge el posible error
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Algo ha ido mal",
      error: error.message,
    });
  }
};
module.exports = isDentist;
