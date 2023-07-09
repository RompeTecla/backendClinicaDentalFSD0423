"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Rols", [
      {
        id: 1,
        privilege: "User",
        createdAt: "2023-06-12 00:00:00",
        updatedAt: "2023-06-12 00:00:00"
      },
      {
        id: 2,
        privilege: "Dentist",
        createdAt: "2023-06-12 00:00:00",
        updatedAt: "2023-06-12 00:00:00"
      },
      {
        id: 3,
        privilege: "Admin",
        createdAt: "2023-06-12 00:00:00",
        updatedAt: "2023-06-12 00:00:00"
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Rols", null, {});
  },
};
