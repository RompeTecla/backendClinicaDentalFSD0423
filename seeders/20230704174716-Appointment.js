"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert(
      "Appointments",
      [
        {
          id: 1,
          pacient_id: 8,
          dentist_id: 1,
          treatment_id: 3,
          status: "Pendiente",
          observations:
            "Me duele mucho la mordida en el lado derecho de la boca.",
          date: "2023-06-10",
          createdAt: "2023-07-04 00:00:00",
          updatedAt: "2023-07-04 00:00:00",
        },
        {
          id: 2,
          pacient_id: 4,
          dentist_id: 2,
          treatment_id: 5,
          status: "Completado",
          observations: "Necesito un blanqueamiento, el sábado tengo una boda.",
          date: "2023-06-05",
          createdAt: "2023-07-04 00:00:00",
          updatedAt: "2023-07-04 00:00:00",
        },
      ],
      {}
    );
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
