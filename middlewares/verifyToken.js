const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization;

    if (!bearerToken) {
      return res.json({
        success: false, // Se ha corregido "succes" a "success"
        message: "No tienes permisos.",
      });
    }

    const token = bearerToken.split(" ")[1];

    const decoded = jwt.verify(token, "alohomora");

    req.user = {
      userId: decoded.userId, // Se ha cambiado "id" a "userId"
      rolId: decoded.rolId,
      gender: decoded.gender,
      name: decoded.name
    };

    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Token no válido.",
      error: error,
    });
  }
};

module.exports = auth;
