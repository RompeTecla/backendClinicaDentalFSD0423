"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert("Treatments", [
      {
        id: 1,
        name: "Ortodoncia",
        duration: "2 horas",
        price: 2000,
        description:
          "Estudio del caso, radiografía integral de la boca, diseño estructural, puesta y revisiones periódicas sujeto a posibles modificaciones.",
        session_num: "Según la necesidad del paciente",
        status: "Disponible",
        createdAt: "2023-06-22 00:00:00",
        updatedAt: "2023-06-22 00:00:00",
      },
      {
        id: 2,
        name: "Ortodoncia invisible",
        duration: "2 horas",
        price: 4000,
        description: 
          "Estudio del caso, toma de impresión, prueba de la férula, renovación de próximas férulas y revisiones quincenales sujeto a posibles modificaciones.",
        session_num: "Según la necesidad del paciente",
        status: "Disponible",
        createdAt: "2023-06-22 00:00:00",
        updatedAt: "2023-06-22 00:00:00",
      },
      {
        id: 3,
        name: "Bruxismo",
        duration: "2 horas",
        price: 450,
        description:
          "Estudio del caso, impresión del molde, prueba del molde y férula definitiva.",
        session_num: "2 sesiones",
        status: "Disponible",
        createdAt: "2023-07-04 00:00:00",
        updatedAt: "2023-07-04 00:00:00",
      },
      {
        id: 4,
        name: "Obturación dental (Colocación de empaste)",
        duration: "1 hora",
        price: 50,
        description:
          "Valoración, radiográfía, limpiar cavidad dental, reconstrucción, sellado y rediseñado de la corona.",
        session_num: "1 sesion",
        status: "Disponible",
        createdAt: "2023-07-04 00:00:00",
        updatedAt: "2023-07-04 00:00:00",
      },
      {
        id: 5,
        name: "Tratamiento para la periodontitis",
        duration: "1 hora",
        price: 250,
        description:
          "Limpieza bucal, valoración del estado de las encías, curetaje de las mas afectadas y administración de antiseptico. A veces es necesaria la adminstración de antibióticos.",
        session_num: "1 o 2 sesiones",
        status: "Disponible",
        createdAt: "2023-07-04 00:00:00",
        updatedAt: "2023-07-04 00:00:00",
      },
      {
        id: 6,
        name: "Protesis dental removible",
        duration: "1 hora",
        price: 250,
        description:
          "Estudio del caso, toma de impresión, prueba de la prótesis, revisiones quincenales sujeto a posibles modificaciones.",
        session_num: "3 sesiones ampliables si fiese necesario",
        status: "Disponible",
        createdAt: "2023-07-04 00:00:00",
        updatedAt: "2023-07-04 00:00:00",
      },
    ]);
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
