const { DataTypes } = require("sequelize");
const sequelize = require('../config/sequelize')

const Cidades = sequelize.define(
  "Cidades",
  {
    Nome: DataTypes.STRING
  }
)

module.exports = Cidades