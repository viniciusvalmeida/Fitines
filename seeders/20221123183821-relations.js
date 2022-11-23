"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("clientes", [
            {
                nome: "José da Silva",
                cpf: "99999999999",
                telefone: "988887777",
                createdAt: new Date(),
                updatedAt: new Date(),
                enderecoId: 1,
            },
        ]);

        await queryInterface.bulkInsert('enderecos', [{
          logradouro: 'Rua Fulano de Tal',
          numero: '123',
          bairroId: 2,
          complemento: null,
          cidadeId: 1,
          estadoId: 1,
          cep: '58076410',
          createdAt: new Date(),
          updatedAt: new Date(),
          clienteId: 1
         }])
    },

    async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete('clientes', null, {})
      await queryInterface.bulkDelete('enderecos', null, {})
    },
};
