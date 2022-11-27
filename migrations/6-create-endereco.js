'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Enderecos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      clienteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Clientes',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
          model: 'Bairros',
          key: 'id'
        }
      },
      cidadeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Cidades',
          key: 'id'
        }
      },
      estadoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Estados',
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
    await queryInterface.dropTable('Enderecos');
  }
};