const { DataTypes } = require('sequelize')
const sequelize = require('../config/sequelize')

const Bairros = sequelize.define(
  "Bairros",
  {
    nome: DataTypes.STRING
  },

  {
    freezeTableName: true,
    tableName: 'bairros'
  }
)

module.exports = Bairros