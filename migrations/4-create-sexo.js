'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Sexo', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sexo: {
        type: Sequelize.STRING,
        allowNull: false
      } 
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Sexo');
  }
};
