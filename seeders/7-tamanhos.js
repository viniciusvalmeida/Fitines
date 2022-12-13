"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("Tamanhos", [
            {
                Nome: "PP",
            },
            {
                Nome: "P",
            },
            {
                Nome: "M",
            },
            {
                Nome: "G",
            },
            {
                Nome: "GG",
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Tamanhos", null, {});
    },
};
