'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sexo', [{
      Sexo: 'FEMININO'
    },
    {
      Sexo: 'MASCULINO'
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sexo', null, {})
  }
};
