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
      CarrinhoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Carrinhos',
          key: 'ClienteId'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      Total: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Vendas')
  }
};
