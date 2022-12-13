'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Produtos', [{
      Nome: 'BIKINI AZUL',
      Preco: 79.90,
      SexoId: 1,
      CategoriaId: 1,
      TamanhoId: 3
    }])
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Produtos', null, {})
  }
};
