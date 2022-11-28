const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Sexo = sequelize.define(
    "Sexo",
    {
        Sexo: DataTypes.STRING,
    },

    {
        freezeTableName: true
    }
);

module.exports = Sexo;