'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('clientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sexoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'sexo',
          key: 'id'
        }
      },
      cpf: {
        type: Sequelize.STRING(11),
        allowNull: false
      },
      telefone: {
        type: Sequelize.STRING(11),
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('clientes');
  }
};