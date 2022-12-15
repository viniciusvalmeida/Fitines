const { DataTypes } = require('sequelize')
const sequelize = require('../config/sequelize')

const Bairros = sequelize.define(
  "Bairros",
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

Bairros.sync()

module.exports = Bairros