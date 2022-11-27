const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const Clientes = require("./Clientes");

const Sexo = sequelize.define(
    "Sexo",
    {
        sexo: DataTypes.STRING,
    },
    {
        freezeTableName: true,
        tableName: 'sexo',
        modelName: 'Sexo'
    }
);

module.exports = Sexo;
