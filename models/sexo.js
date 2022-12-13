const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Sexo = sequelize.define(
    "Sexo",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
          },
          Sexo: {
            type: DataTypes.STRING,
            allowNull: false
          } 
    },

    {
        freezeTableName: true,
        timestamps: false
    }
);

module.exports = Sexo;