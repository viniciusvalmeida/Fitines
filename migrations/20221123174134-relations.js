'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('clientes',
      'enderecoId', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'enderecos',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
    )

    await queryInterface.addColumn('enderecos',
      'clienteId', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'clientes',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('clientes', 'enderecoId')
    await queryInterface.removeColumn('enderecos', 'clienteId')
  }
};
