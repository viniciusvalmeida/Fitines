const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Clientes = sequelize.define(
    "Clientes",
    {
        Nome: DataTypes.STRING,
        SexoId: DataTypes.INTEGER,
        Cpf: DataTypes.STRING(11),
        Telefone: DataTypes.STRING(11),
    }
);

module.exports = Clientes;