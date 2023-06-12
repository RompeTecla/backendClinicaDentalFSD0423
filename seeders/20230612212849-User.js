
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert('Users', [
      {id: 1,
        username: "Quiqueta", 
        password : 1111111111, 
        email: "quiqueta93@gmail.com",
        name: "Enriqueta",
        surname: "Paez",
        address: "c/ Pelayo 23",
        phoneNumber: "323653295",
        createdAt: "2023-06-12 00:00:00", 
        updatedAt: "2023-06-12 00:00:00", 
        rol_id: 1},
      {id: 2,
        username: "Koke", 
        password : 2222222222, 
        email: "koke47@hotmail.com",
        name: "Francisco",
        surname: "Martinez",
        address: "c/ Segorbe 53",
        phoneNumber: "956856856",
        createdAt: "2023-06-12 00:00:00", 
        updatedAt: "2023-06-12 00:00:00", 
        rol_id: 1},
      {id: 3,
        username: "Escobar", 
        password : 3333333333, 
        email: "manoloescobar69@carro.mi",
        name: "Manuel",
        surname: "Escobar",
        address: "c/ Del Robo 94",
        phoneNumber: "996696969",
        createdAt: "2023-06-12 00:00:00", 
        updatedAt: "2023-06-12 00:00:00", 
        rol_id: 2},
      {id: 4,
        username: "Maika", 
        password : 4444444444, 
        email: "mari_carmen@gmail.com",
        name: "Mari Carmen",
        surname: "Valiente",
        address: "Avda Malvarrosa 12",
        phoneNumber: "326456698",
        createdAt: "2023-06-12 00:00:00", 
        updatedAt: "2023-06-12 00:00:00", 
        rol_id: 3},
      {id: 5,
        username: "JuanCar", 
        password : 5555555555, 
        email: "titojuancardijo@queviva.es",
        name: "Juan Carlos",
        surname: "Borbón",
        address: "Paseo de La Zarzuela 1",
        phoneNumber: "000000001",
        createdAt: "2023-06-12 00:00:00", 
        updatedAt: "2023-06-12 00:00:00", 
        rol_id: 1}
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
