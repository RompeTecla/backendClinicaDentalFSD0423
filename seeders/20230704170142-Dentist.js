"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert(
      "Dentists",
      [
        {
          id: 1,
          user_id: 1,
          speciality_id: 1,
          registration_number: "95867458",
          createdAt: "2023-07-04 00:00:00",
          updatedAt: "2023-07-04 00:00:00",
        },
        {
          id: 2,
          user_id: 2,
          speciality_id: 2,
          registration_number: "95864568",
          createdAt: "2023-07-04 00:00:00",
          updatedAt: "2023-07-04 00:00:00",
        },
        {
          id: 3,
          user_id: 3,
          speciality_id: 3,
          registration_number: "95864452",
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
