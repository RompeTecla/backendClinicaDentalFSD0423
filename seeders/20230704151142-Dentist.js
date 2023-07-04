
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert('Dentists', [
      {id: 1,
        user_id : 1, 
        speciality_id : 1, 
        registration_number : "95867458", 
        createdAt: "2023-07-04 00:00:00", 
        updatedAt: "2023-07-04 00:00:00"},
      {id: 2,
        user_id : 2, 
        speciality_id : 2, 
        registration_number : "95863362", 
        createdAt: "2023-07-04 00:00:00", 
        updatedAt: "2023-07-04 00:00:00"},
      {id: 3,
        user_id : 3, 
        speciality_id : 3, 
        registration_number : "95867758", 
        createdAt: "2023-07-04 00:00:00", 
        updatedAt: "2023-07-04 00:00:00"},
      {id: 4,
        user_id : 4, 
        speciality_id : 4, 
        registration_number : "95867544", 
        createdAt: "2023-07-04 00:00:00", 
        updatedAt: "2023-07-04 00:00:00"},
      {id: 5,
        user_id : 5, 
        speciality_id : 5, 
        registration_number : "95865551", 
        createdAt: "2023-07-04 00:00:00", 
        updatedAt: "2023-07-04 00:00:00"},
      {id: 6,
        user_id : 6, 
        speciality_id : 6, 
        registration_number : "95863005", 
        createdAt: "2023-07-04 00:00:00", 
        updatedAt: "2023-07-04 00:00:00"},
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
