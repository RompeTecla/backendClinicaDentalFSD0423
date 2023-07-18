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
          username: "Isabel",
          password:
            "$2b$10$/Nnn4KUvqKmR0yJAUyWMqumOpPSEHixBAOccomg5zhOea4tNjYwyW",
          email: "isa@gmail.com",
          name: "Isabel",
          surname: "Moreno Gimenez",
          address: "san juan de dios 41",
          phone: "652050100",
          gender: "Mujer",
          postcode: "46011",
          createdAt: "2023-06-12 00:00:00",
          updatedAt: "2023-06-12 00:00:00",
          rol_id: 2,
        },
        {
          id: 2,
          username: "GloriaCL",
          password:
            "$2b$10$n921jvxbOoisYueZ0KNapeczOxMcRmmFA/ZNj9GsggzqOR5K6aho2",
          email: "gloriacl@gmail.com",
          name: "Gloria",
          surname: "Caballero",
          address: "calle falsa 123",
          phone: "622552244",
          gender: "Mujer",
          postcode: "46018",
          createdAt: "2023-06-12 00:00:00",
          updatedAt: "2023-06-12 00:00:00",
          rol_id: 2,
        },
        {
          id: 3,
          username: "Lauritania",
          password:
            "$2b$10$w/bec51XqAFHllGJlB6xt.QySh/eZph173eBJUEH.DddmpTBTHpfC",
          email: "laura@gmail.com",
          name: "Laura",
          surname: "Valiente",
          address: "Avda Malvarrosa 12",
          phone: "123123123",
          gender: "Mujer",
          postcode: "46011",
          createdAt: "2023-06-12 00:00:00",
          updatedAt: "2023-06-12 00:00:00",
          rol_id: 2,
        },
        {
          id: 4,
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
          id: 5,
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
          rol_id: 1,
        },
        {
          id: 6,
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
          id: 7,
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
          id: 8,
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
          id: 9,
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
          id: 10,
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
          id: 11,
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
        {
          id: 12,
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
