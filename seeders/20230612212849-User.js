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
          password:
            "$2b$10$pBl2Vpv7DLm.d/8mn3RsgOL6/qTbBiphkXHkCREKHDVPdXVwbMI0e",
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
          password:
            "$2b$10$TVyh8V6JdjayqFLp5VR6XeTOrJ.2/T//S6/JpgfwoID5MG0bQKn3C",
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
          password:
            "$2b$10$.ob5BXlmpHNIQ0JE4/LUMeKo7Dgcwp6E0uGyrVCWPoNYHaMRVoOMm",
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
        {
          id: 4,
          username: "GloriaMaxima",
          password:
            "$2b$10$Pa2WXrCxY5z38PALPu1qSeDRTTZteIJquuJAaNZx00U/UXRckgeiO",
          email: "gloria@gmail.com",
          name: "Gloria",
          surname: "Caballero",
          address: "Avda Yoquese 15",
          phone: "652545859",
          gender: "female",
          postcode: "46652",
          createdAt: "2023-06-12 00:00:00",
          updatedAt: "2023-06-12 00:00:00",
          rol_id: 2,
        },
        {
          id: 5,
          username: "CarlosDentista",
          password:
            "$2b$10$oVH25jMLRL4U9WI1U6d2SuUu73Gq8hwwaFSbH4sx053ckRSIOxl1K",
          email: "carlos@gmail.com",
          name: "Carlos",
          surname: "Redondo",
          address: "Calle Noteimporta 96",
          phone: "854458963",
          gender: "male",
          postcode: "46001",
          createdAt: "2023-06-12 00:00:00",
          updatedAt: "2023-06-12 00:00:00",
          rol_id: 2,
        },
        {
          id: 6,
          username: "JesucristoSuperstar",
          password:
            "$2b$10$R5BQIqO0yWwy7Jdr.oAk.ubQ0pdKCGq6/vb034x7Bkqm1mUrT8fIy",
          email: "jesucristo@dios.com",
          name: "Jesus",
          surname: "Denazaret",
          address: "Avda del cruzifijo 999C",
          phone: "669669669",
          gender: "male",
          postcode: "46000",
          createdAt: "2023-06-12 00:00:00",
          updatedAt: "2023-06-12 00:00:00",
          rol_id: 3,
        },
        {
          id: 7,
          username: "Extasi",
          password:
            "$2b$10$/syGuXs4Z.9/R1iiwRS5Wef9R7lx6s/UFjaY0U5M0DP3/lB4w.AUS",
          email: "ximobayo@gmail.com",
          name: "Joaquin",
          surname: "Bayo",
          address: "Avda del Zasca 89",
          phone: "546546546",
          gender: "male",
          postcode: "46002",
          createdAt: "2023-06-12 00:00:00",
          updatedAt: "2023-06-12 00:00:00",
          rol_id: 1,
        },
        {
          id: 8,
          username: "AlexMagnum",
          password:
            "$2b$10$Lvmq58SpwlJ4hd7x.QjMr.BYa/WIDJqEsn4M6Q9fJy/O2M6mMQAMa",
          email: "alejandro@gmail.com",
          name: "Alejandro",
          surname: "Magno",
          address: "Avda del Imperio 55",
          phone: "000000009",
          gender: "male",
          postcode: "46002",
          createdAt: "2023-06-12 00:00:00",
          updatedAt: "2023-06-12 00:00:00",
          rol_id: 1,
        },
        {
          id: 9,
          username: "Aquiles",
          password:
            "$2b$10$PqgIcSxWdcOzwb9.FAH52uW2aWgwJKBnvd0cr/IUmr/6wNFMTFOAW",
          email: "aquiles@gmail.com",
          name: "Aquiles",
          surname: "El Griego",
          address: "Avda de Troya 1",
          phone: "512321515",
          gender: "male",
          postcode: "46856",
          createdAt: "2023-06-12 00:00:00",
          updatedAt: "2023-06-12 00:00:00",
          rol_id: 1,
        },
        {
          id: 10,
          username: "Cleopatra",
          password:
            "$2b$10$8rDxYmbnEc3Qb6YnCM.66OV1C27bVwHDZwK6IahrCxJPPvPUS8Pe.",
          email: "cleopatra@gmail.com",
          name: "Cleopatra",
          surname: "Ptolemaica",
          address: "Plaza Saqqara bajo 2",
          phone: "665665665",
          gender: "female",
          postcode: "46985",
          createdAt: "2023-06-12 00:00:00",
          updatedAt: "2023-06-12 00:00:00",
          rol_id: 1,
        },
        {
          id: 11,
          username: "Amelia",
          password:
            "$2b$10$0I5gcatJ919Ka83juUQ.X.CDtvFjvLhkq/Q1pJswnhUf6fkjgJWUi",
          email: "amelia@gmail.com",
          name: "Amelia",
          surname: "Earhart",
          address: "Avda de la Aviación 10",
          phone: "554587458",
          gender: "female",
          postcode: "46007",
          createdAt: "2023-06-12 00:00:00",
          updatedAt: "2023-06-12 00:00:00",
          rol_id: 1,
        },
        {
          id: 12,
          username: "Marie",
          password:
            "$2b$10$k2.izCOgsO8enkBpMJMTK.Tsu9OwANM2H9InZbxsSI1d61VAMz88q",
          email: "mariecurie@gmail.com",
          name: "Marie",
          surname: "Curie",
          address: "Avda Radio 72",
          phone: "852654159",
          gender: "female",
          postcode: "46010",
          createdAt: "2023-06-12 00:00:00",
          updatedAt: "2023-06-12 00:00:00",
          rol_id: 1,
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
