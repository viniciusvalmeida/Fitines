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
      clienteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'clientes',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      logradouro: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.INTEGER
      },
      bairroId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'bairro',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      complemento: {
        type: Sequelize.STRING
      },
      cidadeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'cidade',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      estadoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'estado',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      cep: {
        type: Sequelize.INTEGER
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