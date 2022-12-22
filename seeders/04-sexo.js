'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sexo', [{
      Sexo: 'Feminino'
    },
    {
      Sexo: 'Masculino'
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sexo', null, {})
  }
};
