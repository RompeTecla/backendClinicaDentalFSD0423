"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert("Treatments", [
      {
        id: 1,
        name: "Extraccion de cordales",
        duration: "2 horas",
        price: "80€",
        description: "Ortopantomografía, extracción y seguimiento.",
        num_sessions: "Requiere valoración y estudio previo.",
        status: "Disponible",
        createdAt: "2023-06-22 00:00:00",
        updatedAt: "2023-06-22 00:00:00",
      },

      {
        id: 2,
        name: "Colocar obturación",
        duration: "1 hora",
        price: "40€",
        description: "Analisis, obturación y seguimiento.",
        num_sessions: "1",
        status: "Disponible",
        createdAt: "2023-06-12 00:00:00",
        updatedAt: "2023-06-22 00:00:00",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
