'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('enderecos', [{
    logradouro: 'Rua Fulano de Tal',
    numero: '123',
    bairroId: 2,
    complemento: null,
    cidadeId: 1,
    estadoId: 1,
    cep: '58076410',
    createdAt: new Date(),
    updatedAt: new Date(),
    clienteId: 1
   }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('enderecos', null, {})
  }
};
