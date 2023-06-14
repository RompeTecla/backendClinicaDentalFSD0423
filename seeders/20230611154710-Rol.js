'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Rols', [
      {
        rolType: 'User', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      {
        rolType: 'Dentist', 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rolType: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Rols', null, {});
  },
};