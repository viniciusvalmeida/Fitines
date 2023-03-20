'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Categorias', [
      {
        Nome: 'BIKINI'
      },
      {
        Nome: 'SHORTS'
      },
      {
        Nome: 'BLUSA'
      },
      {
        Nome: 'ACESSORIO '
      },
    ])
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Categorias', null, {})
  }
};
