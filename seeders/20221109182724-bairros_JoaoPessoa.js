'use strict';

async function consomeAPI () {
  const api = await fetch('http://enderecos.metheora.com/api/cidade/4964/bairros')
  const resolve = await api.json()

  return resolve
}

console.log(consomeAPI())

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    // return queryInterface.bulkInsert('bairros', [{
    //   nome: 'teste',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
