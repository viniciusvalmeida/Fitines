'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sexo', [{
      sexo: 'Feminino'
    },
    {
      sexo: 'Masculino'
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sexo', null, {})
  }
};
