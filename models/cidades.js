const { DataTypes } = require("sequelize");
const sequelize = require('../config/sequelize')

const Cidades = sequelize.define(
  "Cidades",
  {
    nome: DataTypes.STRING
  },

  {
    tableName: 'cidades',
    freezeTableName: true
  }
)

module.exports = Cidades