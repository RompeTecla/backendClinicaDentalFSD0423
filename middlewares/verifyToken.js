const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization;

    if (!bearerToken) {
      return res.json({
        succes: true,
        message: "No tienes permisos.",
      });
    }

    const token = bearerToken.split(" ")[1];

    const decoded = jwt.verify(token, "alohomora");

    req.userId = decoded.userId;
    req.rolId = decoded.rolId;

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
