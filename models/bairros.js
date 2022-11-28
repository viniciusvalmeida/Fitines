const { DataTypes } = require('sequelize')
const sequelize = require('../config/sequelize')

const Bairros = sequelize.define(
  "Bairros",
  {
    Nome: DataTypes.STRING
  }
)

module.exports = Bairros