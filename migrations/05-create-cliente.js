'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Clientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      SexoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Sexo',
          key: 'id'
        }
      },
      Cpf: {
        type: Sequelize.STRING(11),
        allowNull: false
      },
      Telefone: {
        type: Sequelize.STRING(11),
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Clientes');
  }
};