"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert(
      "Pacients",
      [
        {
          id: 1,
          user_id: 5,
          createdAt: "2023-07-04 00:00:00",
          updatedAt: "2023-07-04 00:00:00",
        },
        {
          id: 2,
          user_id: 6,
          createdAt: "2023-07-04 00:00:00",
          updatedAt: "2023-07-04 00:00:00",
        },
        {
          id: 3,
          user_id: 7,
          createdAt: "2023-07-04 00:00:00",
          updatedAt: "2023-07-04 00:00:00",
        },
        {
          id: 4,
          user_id: 8,
          createdAt: "2023-07-04 00:00:00",
          updatedAt: "2023-07-04 00:00:00",
        },
        {
          id: 5,
          user_id: 9,
          createdAt: "2023-07-04 00:00:00",
          updatedAt: "2023-07-04 00:00:00",
        },
        {
          id: 6,
          user_id: 10,
          createdAt: "2023-07-04 00:00:00",
          updatedAt: "2023-07-04 00:00:00",
        },
        {
          id: 7,
          user_id: 11,
          createdAt: "2023-07-04 00:00:00",
          updatedAt: "2023-07-04 00:00:00",
        },
        {
          id: 8,
          user_id: 12,
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
