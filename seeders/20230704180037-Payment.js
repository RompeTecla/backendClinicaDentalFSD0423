'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert('Payments', [
      {
        id: 1, 
        treatment_id : 1,
        note: "Tratamiento con estracción de 2 piezas.",
        date: "06/02/1859",
        amount: 100,
        payment_method: "efectivo",
        createdAt: "2023-07-04 00:00:00", 
        updatedAt: "2023-07-04 00:00:00"
      },

      {
        id: 2, 
        treatment_id : 1,
        note: "Blanqueamiento dental",
        date: "31/12/2000",
        amount: 205,
        payment_method:"tarjeta",
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
