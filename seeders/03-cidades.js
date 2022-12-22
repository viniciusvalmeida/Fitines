'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Cidades', [{
      Nome: 'João Pessoa'
    }])
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Cidades', null, {})
  }
};
