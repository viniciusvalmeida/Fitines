'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('enderecos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      logradouro: {
        type: Sequelize.STRING,
        allowNull: false
      },
      numero: {
        type: Sequelize.STRING(4),
        allowNull: false,
      },
      complemento: {
        type: Sequelize.STRING
      },
      bairroId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'bairros',
          key: 'id'
        }
      },
      cidadeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'cidades',
          key: 'id'
        }
      },
      estadoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'estados',
          key: 'id'
        }
      },
      cep: {
        type: Sequelize.STRING(8),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('enderecos');
  }
};