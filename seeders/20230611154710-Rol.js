'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Roles', [
      {
        rolType: 'User', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      {
        rolType: 'Admin', 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rolType: 'Superadmin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roles', null, {});
  },
};