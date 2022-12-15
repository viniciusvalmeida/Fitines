const { DataTypes } = require("sequelize");
const sequelize = require('../config/sequelize')

const Tamanhos = sequelize.define(
  "Tamanhos",
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

Tamanhos.sync()

module.exports = Tamanhos