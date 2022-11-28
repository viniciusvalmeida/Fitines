const { DataTypes } = require('sequelize')
const sequelize = require('../config/sequelize')

const Estados = sequelize.define(
  "Estados",
  {
    Nome: DataTypes.STRING
  }
)

module.exports = Estados