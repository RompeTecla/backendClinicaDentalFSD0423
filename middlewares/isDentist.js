const isDentist = (req, res, next) => {
  try {
    //Si el rol_id no es 2, no podrás iniciar sesión como Dentista.
    if (req.rol_id !== 2) {
      return res.status(500).json({
        success: true,
        message: "No tienes permisos.",
      });
    }
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