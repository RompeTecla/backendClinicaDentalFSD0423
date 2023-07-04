'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert('Appointments', [
      {id: 1,
        pacient_id : 1,
        dentist_id: 1,
        treatment_id : 1,
        status: "pending",
        observations: "Me duele mucho la mordida en el lado derecho de la boca.",
        date: "2023-06-10 00:00:00",
        createdAt: "2023-07-04 00:00:00", 
        updatedAt: "2023-07-04 00:00:00"
      },
      {id: 2,
        pacient_id : 2,
        dentist_id: 1,
        treatment_id : 1,
        status: "complete",
        observations: "Necesito un blanqueamiento, el sábado tengo una boda.",
        date: "2023-06-05 00:00:00", 
        createdAt: "2023-07-04 00:00:00", 
        updatedAt: "2023-07-04 00:00:00"
      }
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
