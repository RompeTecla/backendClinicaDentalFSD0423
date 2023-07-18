const { Appointment, Treatment, Dentist, Pacient } = require("../models");

const appointmentController = {};

// Función para que el usuario cree una nueva cita

appointmentController.createAppointment = async (req, res) => {
  try {
    const { pacient_id, dentist_id, treatment_id, status, observations, date } =
      req.body;

    const newAppointment = {
      pacient_id: pacient_id,
      dentist_id: dentist_id,
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

// Función para ver todas las citas.

appointmentController.getAppointment = async (req, res) => {
  let citasActivas = await Appointment.findAll({
    attributes: ["pacient_id", "dentist_id", "treatment_id", "status", "date", "observations"],
  });
  res.status(200).json({
    message: "Estas son todas las citas pendientes en el calendario.",
    citasActivas,
  });
};

// Función para mostrar las citas que tiene un usuario con su userId.

appointmentController.getAppointmentById = async (req, res) => {
  try {
    const userId = req.user.userId;

    const paciente = await Pacient.findOne({ where: { user_id: userId } });

    if (!paciente) {
      return res
        .status(404)
        .json({ message: "No se han encontrado pacientes con este usuario." });
      }

    const pacientId = paciente.id;

    const appointments = await Appointment.findAll({
      where: {
        pacient_id: pacientId,
      },
      include: [
        Treatment,
        {
          model: Treatment,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        {
          model: Pacient,
          attributes: {
            exclude: ["user_id", "createdAt", "updatedAt"],
          },
        },
        {
          model: Dentist,
          attributes: {
            exclude: [
              "user_id",
              "registration_number",
              "createdAt",
              "updatedAt",
            ],
          },
        },
      ],
      attributes: {
        exclude: [
          "pacient_id",
          "dentist_id",
          "treatment_id",
          "createdAt",
          "updatedAt",
        ],
      },
    });

    res.json(appointments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al recibir las citas" });
  }
};

appointmentController.getAppointmentAsDoctor = async (req, res) => {
  try { console.log("Hola soy un error")
    const userId = req.user.userId;

    // Busco en la tabla Pacientes el registro correspondiente al userId del token.
    const dentist = await Dentist.findOne({ where: { user_id: userId } });

    if (!dentist) {
      // Si no se encuentra un registro en Pacientes, devuelvo un mensaje de error.
      return res
        .status(404)
        .json({ message: "No se han encontrado pacientes asociados a este usuario" });
    }

    // Si encuentro un registro en Pacientes, obtengo su pacient_id
    const dentistId = dentist.id;

    const appointments = await Appointment.findAll({
      where: {
        dentist_id: dentistId,
      },
      include: [
        Treatment,
        {
          model: Treatment,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        {
          model: Pacient,
          attributes: {
            exclude: ["user_id", "createdAt", "updatedAt"],
          },
        },
        {
          model: Dentist,
          attributes: {
            exclude: [
              "user_id",
              "registration_number",
              "createdAt",
              "updatedAt",
            ],
          },
        },
      ],
      attributes: {
        exclude: [
          "pacient_id",
          "dentist_id",
          "treatment_id",
          "createdAt",
          "updatedAt",
        ],
      },
    });

    res.json(appointments);
  } catch (error) {
    res.status(500).send(error.message);
    console.log("Hola soy un error")
  }
};

// Función para modificar citas

appointmentController.putAppointmentById = async (req, res) => {
  try {
    const userId = req.userId;
    const appointmentId = req.params.id;

    const paciente = await Pacient.findOne({ where: { user_id: userId } });

    if (!paciente) {
      return res
        .status(404)
        .json({
          message: "No se ha encontrado paciente relacionado con este Usuario",
        });
    }

    const pacientId = paciente.id;

    const { date } = req.body;

    const updateAppointment = await Appointment.update(
      { date: date },
      { where: { id: appointmentId, pacient_id: pacientId } }
    );

    return res.json(updateAppointment);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Función para eliminar citas.

appointmentController.deleteAppointmentById = async (req, res) => {
  try {
    const userId = req.user.id;
    const appointmentId = req.params.id;

    const paciente = await Pacient.findOne({ where: { user_id: userId } });

    if (!paciente) {
      return res
        .status(404)
        .json({ message: "Sin paciente relacionado con este usuario" });
    }

    const pacientId = paciente.id;

    const deleteAppointment = await Appointment.destroy({
      where: { id: appointmentId, pacient_id: pacientId },
    });

    return res.json(deleteAppointment);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = appointmentController;
