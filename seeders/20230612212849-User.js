"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 1,
          username: "JuanCar",
          password: "$2b$10$pBl2Vpv7DLm.d/8mn3RsgOL6/qTbBiphkXHkCREKHDVPdXVwbMI0e",
          email: "titojuancardijo@queviva.es",
          name: "Juan Carlos",
          surname: "Borbón",
          address: "Paseo de La Zarzuela 1",
          phone: "000000001",
          gender: "male",
          postcode: "00001",
          createdAt: "2023-06-12 00:00:00",
          updatedAt: "2023-06-12 00:00:00",
          rol_id: 1,
        },
        {
          id: 2,
          username: "Escobar",
          password: "$2b$10$TVyh8V6JdjayqFLp5VR6XeTOrJ.2/T//S6/JpgfwoID5MG0bQKn3C",
          email: "manoloescobar69@carro.mi",
          name: "Manuel",
          surname: "Escobar",
          address: "c/ Del Robo 94",
          phone: "000000002",
          gender: "male",
          postcode: "46012",
          createdAt: "2023-06-12 00:00:00",
          updatedAt: "2023-06-12 00:00:00",
          rol_id: 2,
        },
        {
          id: 3,
          username: "Javier",
          password: "$2b$10$.ob5BXlmpHNIQ0JE4/LUMeKo7Dgcwp6E0uGyrVCWPoNYHaMRVoOMm",
          email: "javier@gmail.com",
          name: "Javier",
          surname: "Valiente",
          address: "Avda Malvarrosa 12",
          phone: "000000003",
          gender: "male",
          postcode: "46011",
          createdAt: "2023-06-12 00:00:00",
          updatedAt: "2023-06-12 00:00:00",
          rol_id: 3,
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
