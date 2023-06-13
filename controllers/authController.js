const { User } = require ("../models/");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const authController = {}

//Función para el login de Usuario
authController.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({
            where: {
                email: email
            }
        });

        //Si el usuario no existe, no te da acceso y te dice "Credenciales incorrectas"
        if(!user) {
            return res.send('Credenciales incorrectas')
        }
        
        //En caso contrario, compara con el Token de contraseñas
        const isMatch = bcrypt.compareSync(password, user.password);

        if(!isMatch) {
            return res.send('Credenciales incorrectas')
        }

        const token = jwt.sign(
            { 
                userId: user.id,
                email: user.email,
                rolId: user.rol_id,
                username: user.username,
            },

        //El Token tiene caducidad de 1h. Llegado ese tiempo debe renovarse.
            'alohomora',
            { expiresIn: '1h'}
        );

        //Si el usuario inicia sesión correctamente, se muestra su token.
        return res.json(
            {
                success: true,
                message: "Login successfully",
                token: token
            }
        )

    } catch (error) {
        return res.status(500).send(error.message)
    }
};

module.exports = authController