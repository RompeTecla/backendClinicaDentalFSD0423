const { User } = require ("../models/");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const authController = {};

//Función para el login de Usuario
authController.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Se comprueba si el email introducido se encuentra en alguna fila del modelo "User" de la DB
        const user = await User.findOne({
            where: {
                email: email
            }
        });

        // Si el usuario no existe, no te da acceso y te dice "Credenciales incorrectas"
        if(!user) {
            return res.send('Credenciales incorrectas')
        }
        
        // Si el email introducido lo encuentra en la tabla, compara la contraseña 
        // proporcionada con la contraseña encriptada con bcrypt de la base de datos.
        const isMatch = bcrypt.compareSync(password, user.password);

        if(!isMatch) {
            return res.send('Email y contraseña no coinciden')
        }
        // Genera el Token en base a las propiedades que extrae el user que logea.
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

        //Cuando el usuario inicia sesión correctamente, se muestra su token generado.
        return res.json(
            {
                success: true,
                message: (`¿En que podemos ayudarte ${user.name}?`),
                token: token
            }
        )

    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Ha habido un problema con el login",
                error: error
            }
        )
    }
};

module.exports = authController