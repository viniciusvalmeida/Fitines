"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("Enderecos", [
            {
                ClienteId: 1,
                Logradouro: "Rua Fulano de Tal",
                Numero: "123",
                Complemento: null,
                BairroId: 2,
                CidadeId: 1,
                EstadoId: 1,
                Cep: "58076410",
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Enderecos", null, {});
    },
};
