const { User, Rol } = require("../models");
const bcrypt = require("bcrypt");

const userController = {};

//Funcion para crear nuevo usuario.

userController.createUser = async (req, res) => {
  try {
    const {
      username,
      email,
      password,
      name,
      surname,
      address,
      phone,
      date_of_birth,
      gender,
      postcode,
    } = req.body;

    const encryptedPassword = bcrypt.hashSync(password, 10);

    const newUser = await User.create({
      username: username,
      password: encryptedPassword,
      email: email,
      name: name,
      surname: surname,
      address: address,
      phone: phone,
      date_of_birth: date_of_birth,
      gender: gender,
      postcode: postcode,
      rol_id: req.body.rol_id || 1, //Por defecto es rol 1
    });
    console.log(newUser);
    return res.json({
      success: true,
      message: "Usuario Registrado",
      data: newUser,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

//Función para mostrar todos los usuarios registrados omitiendo datos sensibles, incluido su rol_id.
userController.getUser = async (req, res) => {
  try {
    const userActives = await User.findAll({
      include: [
        {
          model: Rol,
          attributes: {
            exclude: ["id", "createdAt", "updatedAt"],
          },
        },
      ],
      attributes: {
        exclude: ["rol_id", "password", "createdAt", "updatedAt"],
      },
    });

    if (!userActives) {
      return res.send("Usuario no encontrado");
    }

    return res.json(userActives);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

//Función para mostrar el usuario por id de usuario.

userController.getUserById = async (req, res) => {
  try {
    const userId = req.user.id;
    console.log(req.user.id)

    const user = await User.findByPk(userId, {
      include: [
        Rol,
        {
          model: Rol,
          attributes: {
            exclude: ["id", "createdAt", "updatedAt"],
          },
        },
      ],
      attributes: {
        exclude: ["rol_id", "password", "createdAt", "updatedAt"],
      },
    });

    if (!user) {
      return res.send("Usuario no encontrado");
    }

    return res.json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

//Función para actualizar el usuario por su ID. Requiere la contraseña de usuario.
userController.putUserById = async (req, res) => {
  try {
    const userId = req.user.id;

    const {
      username,
      password,
      email,
      name,
      surname,
      address,
      phone,
      date_of_birth,
      gender,
      postcode,
    } = req.body;

    const encryptedPassword = bcrypt.hashSync(password, 10);

    const updateUser = await User.update(
      {
        username,
        encryptedPassword,
        email,
        name,
        surname,
        address,
        phone,
        date_of_birth,
        gender,
        postcode,
      },
      {
        where: { id: userId },
      }
    );

    return res.json(updateUser);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

//Funcion para eliminar Usuario por su ID.

userController.deleteUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    const deleteUser = await User.destroy({ where: { id: userId } });

    return res.json(deleteUser);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = userController;
