
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert('Specialities', [
      {id: 1, 
        name: "Ortodoncista", 
        description : "Diagnóstico, prevención y tratamiento de problemas de maloclusión dental. Implementación de brackets, alineadores transparentes o alineadores dentales.", 
        createdAt: "2023-07-04 00:00:00", 
        updatedAt: "2023-07-04 00:00:00"},
      {id: 2,
        name: "Periodoncista", 
        description: "Diagnóstico y tratamiento de enfermedades de las encías y los tejidos que rodean los dientes, como la gingivitis, la periodontitis, realizar cirugía de las encías, injertos de tejido y colocación de implantes dentales.", 
        createdAt: "2023-07-04 00:00:00", 
        updatedAt: "2023-07-04 00:00:00"},
      {id: 3,
        name: "Endodoncia", 
        description: "Tratamientos de conducto radicular (endodoncia) para tratar infecciones o inflamaciones en el interior del diente y realizar reendodoncias en caso de tratamientos previos fallidos.", 
        createdAt: "2023-07-04 00:00:00", 
        updatedAt: "2023-07-04 00:00:00"},
      {id: 4,
        name: "Odontopediatría", 
        description: "Atención dental especializada para infantiles, desde la infancia hasta la adolescencia; mediante tratamientos preventivos como selladores dentales, empastes, entre otros.", 
        createdAt: "2023-07-04 00:00:00", 
        updatedAt: "2023-07-04 00:00:00"},
      {id: 5,
        name: "Cirujano oral y maxilofacial", 
        description: "Procedimientos quirúrgicos que involucran la boca, la cara, la mandíbula y las estructuras relacionadas. Los cirujanos orales y maxilofaciales pueden realizar extracciones de dientes complicadas, cirugía de implantes dentales.", 
        createdAt: "2023-07-04 00:00:00", 
        updatedAt: "2023-07-04 00:00:00"},
      {id: 6,
        name: "Anestesista", 
        description: "Evaluación preoperatoria, selección de la dosis correcta y el tipo de anestesia necesaria, monitoreo del paciente, control postoperatorio, manejo de situaciones de emergencia.", 
        createdAt: "2023-07-04 00:00:00", 
        updatedAt: "2023-07-04 00:00:00"}
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
