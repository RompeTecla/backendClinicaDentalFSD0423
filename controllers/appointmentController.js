const { Appointment, Treatment, User } = require("../models");

const appointmentController = {};

// Función para que el usuario cree una nueva cita

appointmentController.createAppointment = async (req, res) => {
  try {
    const { treatment_id, status, observations, date } = req.body;

    // Obtener el user_id del token del usuario autenticado
    const userId = req.userId;

    const newAppointment = {
      user_id: userId,
      treatment_id: treatment_id,
      status: status,
      observations: observations,
      date: date,
    };

    const appointment = await Appointment.create(newAppointment);

    return res.json(appointment);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = appointmentController;

// Función para que el Dentista pueda ver todas las citas pendientes.

appointmentController.getAppointment = async (req, res) => {
  let citasActivas = await Appointment.findAll({
    attributes: ["user_id", "date", "treatment_id", "observations", "status"],
  });
  res.status(200).json({
    message: "Estas son todas las citas pendientes.",
    citasActivas,
  });
};

// Función para mostrar las citas que tiene un usuario por su userId.

appointmentController.getAppointmentById = async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findOne({ where: { id: userId } });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }

    const appointments = await Appointment.findAll({
      where: {
        user_id: userId,
      },
      include: [
        {
          model: Treatment,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        {
          model: User,
          attributes: {
            exclude: ["user_id", "createdAt", "updatedAt"],
          },
        },
      ],
      attributes: {
        exclude: [
          "user_id",
          "treatment_id",
          "createdAt",
          "updatedAt",
        ],
      },
    });

    if (appointments.length === 0) {
      return res.status(404).json({ message: "El usuario no tiene citas pendientes" });
    }

    res.json(appointments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al recibir las citas" });
  }
};

// Función para que un Dentista pueda modificar un appointment

appointmentController.putAppointmentById = async (req, res) => {
  try {
    const appointmentId = req.params.appointmentId;

    const appointment = await Appointment.findOne({
      where: { id: appointmentId },
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    if (!appointment) {
      return res.status(404).json({ message: "Cita no encontrada." });
    }

    res.json(appointment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al modificar la cita." });
  }
};

// Función para que un usuario pueda anular una cita suya

appointmentController.deleteAppointmentById = async (req, res) => {
  try {
    const userId = req.userId;
    const appointmentId = req.params.appointmentId;

    const appointment = await Appointment.findOne({
      where: { id: appointmentId, user_id: userId },
    });

    if (!appointment) {
      return res.status(404).json({ message: "Cita no encontrada." });
    }

    await appointment.destroy();

    res.json({ message: "Cita eliminada satisfactoriamente." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error eliminando la cita." });
  }
};

// Función para que un Dentista pueda eliminar la cita de cualquier cliente.

appointmentController.deleteAppointmentById = async (req, res) => {
  try {
    const appointmentId = req.params.appointmentId;

    const appointment = await Appointment.findByPk(appointmentId);

    if (!appointment) {
      return res.status(404).json({ message: "Cita no encontrada." });
    }

    await appointment.destroy();

    res.json({ message: "Cita eliminada satisfactoriamente." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error eliminando la cita." });
  }
};


module.exports = appointmentController;
