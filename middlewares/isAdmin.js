const isAdmin = (req, res, next) => {
  try {
    //Si el rol_id no es 3, verificará que eres Administrador.
    if (req.rol_id === 3) {
      next();
    } else {
      return res.status(500).json({
        success: true,
        message: "No puedes administrar esta página.",
      });
    }
    // next();
    //Recoge el posible error
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Algo ha ido mal",
      error: error.message,
    });
  }
};
module.exports = isAdmin;
