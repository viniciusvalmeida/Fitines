const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const Sexo = require("./Sexo");
const Enderecos = require("./Enderecos");

const Clientes = sequelize.define(
    "Clientes",
    {
        Nome: DataTypes.STRING,
        SexoId: DataTypes.INTEGER,
        Cpf: DataTypes.STRING(11),
        Telefone: DataTypes.STRING(11),
    }
);

Clientes.belongsTo(Sexo)
Clientes.hasOne(Enderecos)

module.exports = Clientes;