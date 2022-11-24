"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("enderecos", [
            {
                logradouro: "Rua Fulano de Tal",
                numero: "123",
                complemento: null,
                bairroId: 2,
                cidadeId: 1,
                estadoId: 1,
                cep: "58076410",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("enderecos", null, {});
    },
};
