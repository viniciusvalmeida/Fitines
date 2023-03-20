'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Estados', [{
      Nome: 'PB'
    }])
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Estados', null, {})
  }
};
