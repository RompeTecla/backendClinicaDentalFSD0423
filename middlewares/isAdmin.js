
const isAdmin = (req, res, next) => {
    try {
    //Si el user_id no es 3, no podrás iniciar sesión como Administrador.
        if (req.rolId !==3 ){

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
}
module.exports = isAdmin;

