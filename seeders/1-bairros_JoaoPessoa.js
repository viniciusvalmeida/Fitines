const bairrosJson = require('../config/bairros.json')

'use strict';

const bairros = bairrosJson.map(bairro => {
  return {
    Nome: bairro.Nome
  }
})

// async function consomeAPI () {
//   const api = await fetch('http://enderecos.metheora.com/api/cidade/4964/bairros')
//   const resolve = await api.json()

//   return resolve
// }

// console.log(consomeAPI())

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Bairros', bairros)
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Bairros', null, {})
  }
};
