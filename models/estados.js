const { DataTypes } = require('sequelize')
const sequelize = require('../config/sequelize')

const Estados = sequelize.define(
  "Estados",
  {
    nome: DataTypes.STRING
  },

  {
    tableName: 'estados',
    freezeTableName: true
  }
)

module.exports = Estados