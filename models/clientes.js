const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const Sexo = require("./Sexo");

const Clientes = sequelize.define(
    "Clientes",
    {
        nome: DataTypes.STRING,
        sexoId: DataTypes.INTEGER,
        cpf: DataTypes.STRING(11),
        telefone: DataTypes.STRING(11),
    },

    {
        freezeTableName: true,
        tableName: 'clientes',
        modelName: 'Clientes'
    }
);

module.exports = Clientes;
