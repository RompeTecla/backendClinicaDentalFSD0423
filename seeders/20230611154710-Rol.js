"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Rols", [
      {
        id: 1,
        rolType: "User",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        rolType: "Dentist",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        rolType: "Admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Rols", null, {});
  },
};
