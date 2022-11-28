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
      ClienteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Clientes',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      Logradouro: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Numero: {
        type: Sequelize.STRING(4),
        allowNull: false,
      },
      Complemento: {
        type: Sequelize.STRING
      },
      BairroId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Bairros',
          key: 'id'
        }
      },
      CidadeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Cidades',
          key: 'id'
        }
      },
      EstadoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Estados',
          key: 'id'
        }
      },
      Cep: {
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