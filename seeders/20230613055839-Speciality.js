"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert(
      "Specialities",
      [
        {
          id: 1,
          name: "Ortodoncista",
          description:
            "Diagnóstico, prevención y tratamiento de problemas de maloclusión dental. Implementación de brackets, alineadores transparentes, alineadores dentales o ferulas de descarga.",
          createdAt: "2023-07-04 00:00:00",
          updatedAt: "2023-07-04 00:00:00",
        },
        {
          id: 2,
          name: "Periodoncista",
          description:
            "Diagnóstico y tratamiento de enfermedades de las encías y los tejidos que rodean los dientes, como la gingivitis, la periodontitis, realizar cirugía de las encías, injertos de tejido y colocación de implantes dentales.",
          createdAt: "2023-07-04 00:00:00",
          updatedAt: "2023-07-04 00:00:00",
        },
        {
          id: 3,
          name: "Estomatología",
          description:
            "Especialida médica centrada en el diagnóstico y tratamiento de tejidos blandos de la cavidad bucal y laringofaringea. Como tratamiento de ulceras, labioleporino, traumatismo facial severo o cancer lingüal.",
          createdAt: "2023-07-04 00:00:00",
          updatedAt: "2023-07-04 00:00:00",
        },
        {
          id: 4,
          name: "Odontopediatría",
          description:
            "Atención dental especializada para infantiles, desde la infancia hasta la adolescencia; mediante tratamientos preventivos como selladores dentales, empastes, entre otros.",
          createdAt: "2023-07-04 00:00:00",
          updatedAt: "2023-07-04 00:00:00",
        },
        {
          id: 5,
          name: "Higienista dental",
          description:
            "Especialidad centrada en la higiene dental, mediante limpiezas dentales, blanqueamientos, tratamientos preventivos, y educación sobre higiene bucodental.",
          createdAt: "2023-07-04 00:00:00",
          updatedAt: "2023-07-04 00:00:00",
        },
        {
          id: 6,
          name: "Anestesista",
          description:
            "Evaluación preoperatoria, selección de la dosis correcta y el tipo de anestesia necesaria, monitoreo del paciente, control postoperatorio, manejo de situaciones de emergencia.",
          createdAt: "2023-07-04 00:00:00",
          updatedAt: "2023-07-04 00:00:00",
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
