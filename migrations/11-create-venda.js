'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('Vendas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PedidoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Pedidos',
          key: 'id'
        }
      },
      Total: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
   })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Vendas')
  }
};
