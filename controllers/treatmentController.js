const { Treatment } = require("../models");

const treatmentController = {};

// Función para crear tratamientos nuevos.

treatmentController.createTreatment = async (req, res) => {
  try {
    const { name, duration, price, description, date, num_sessions, status } =
      req.body;

    const newTreatment = {
      name: name,
      duration: duration,
      price: price,
      description: description,
      num_sessions: num_sessions,
      status: status,
    };
    // Guarda el nuevo tratamiento.
    const treatment = await Treatment.create(newTreatment);

    return res.json(treatment);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Función para mostrar todos los tratamientos registrados en la clínica.

treatmentController.getAllTreatments = async (req, res) => {
  try {
    const treatments = await Treatment.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    return res.json(treatments);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Función para buscar un tratamiento por su id.

treatmentController.getTreatmentById = async (req, res) => {
  try {
    const treatmentId = req.params.id;

    const treatment = await Treatment.findByPk(treatmentId, {
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    return res.json(treatment);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Función para modificar un Tratamiento por su id

treatmentController.putTreatmentById = async (req, res) => {
  try {
    const treatmentId = req.params.id;

    const {
      name,
      duration,
      price,
      description,
      availability,
      date,
      session_num,
    } = req.body;

    const updateTreatment = await Treatment.update(
      {
        name: name,
        duration: duration,
        price: price,
        description: description,
        date: date,
        num_sessions: session_num,
        availability: availability,
      },
      {
        where: {
          id: treatmentId,
        },
      }
    );

    return res.json(updateTreatment);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Función para eliminar un tratamiento por su id

treatmentController.deleteTreatmentById = async (req, res) => {
  try {
    const treatmentId = req.params.id;

    const deletedTreatment = await Treatment.destroy({
      where: {
        id: treatmentId,
      },
    });

    if (deletedTreatment === 0) {
      return res.status(404).json({ message: "No se encontró el tratamiento" });
    }

    return res.json({ message: "Tratamiento eliminado correctamente" });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = treatmentController;
