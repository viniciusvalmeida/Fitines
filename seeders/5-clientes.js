'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Clientes', [{
    Nome: 'José da Silva',
    SexoId: 2,
    Cpf: '99999999999',
    Telefone: '988887777'
   }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clientes', null, {})
  }
};
