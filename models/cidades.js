const { DataTypes } = require("sequelize");
const sequelize = require('../config/sequelize')

const Cidades = sequelize.define(
  "Cidades",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    Nome: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  
  {
    timestamps: false
  }
)

Cidades.sync()

module.exports = Cidades