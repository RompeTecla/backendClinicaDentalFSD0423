const { Payment, Treatment } = require("../models");

const paymentController = {};

// Función para creación de pagos

paymentController.createPayment = async (req, res) => {
  try {
    const { treatment_id, notes, date, amount, payment_method } = req.body;

    const newPayment = {
      treatment_id,
      notes: notes,
      date: date,
      amount: amount,
      payment_method: payment_method,
    };
    // Guardar la informacion
    const payment = await Payment.create(newPayment);

    return res.json(payment);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Función para mostrar un usuario por el id del payment.

paymentController.getPaymentById = async (req, res) => {
  try {
    const paymentId = req.params.id;

    const payment = await Payment.findByPk(paymentId, {
      include: [
        Treatment,
        {
          model: Treatment,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
      attributes: {
        exclude: ["treatment_id", "createdAt", "updatedAt"],
      },
    });

    return res.json(payment);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = paymentController;
