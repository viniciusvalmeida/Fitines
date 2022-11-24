'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sexo', [{
      sexo: 'Feminino'
    },
    {
      sexo: 'Masculino'
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sexo', null, {})
  }
};
