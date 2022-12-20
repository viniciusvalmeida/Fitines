'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Produtos', {
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
      Preco: {
        type: Sequelize.FLOAT,
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
      CategoriaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Categorias',
          key: 'id'
        }
      },
      TamanhoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Tamanhos',
          key: 'id'
        }
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
   await queryInterface.dropTable('Produtos')
  }
};
