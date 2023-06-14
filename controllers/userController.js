const { User, Rol } = require("../models");
const bcrypt = require("bcrypt");

const userController = {};

//Funcion para crear nuevo usuario.

userController.createUser = async (req, res) => {
  try {
    const { username, email, password, name, surname, address } =
      req.body;

    const encryptedPassword = bcrypt.hashSync(password, 10);

    const newUser = await User.create({
      username: username,
      password: encryptedPassword,
      email: email,
      name: name,
      surname: surname,
      address: address,
      rol_id: 3
    });

    return res.json({
      success: true,
      message: "Usuario Registrado",
      data: newUser,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

//Función para mostrar todos los usuarios registrados omitiendo datos sensibles, incluido su rol.
userController.getUser = async (req, res) => {
  try {
    const userActives = await User.findAll({
      include: [
        // Rol,
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
    const userId = req.userId;

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

//Función para actualizar el usuario por su ID.
userController.putUserById = async (req, res) => {
  try {
    const userId = req.userId;

    const {
      username,
      password,
      email,
      name,
      surname,
      address,
      phoneNumber
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
        phoneNumber
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
