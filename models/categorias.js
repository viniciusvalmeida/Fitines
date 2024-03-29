const { DataTypes } = require("sequelize");
const sequelize = require('../config/sequelize')

const Categorias = sequelize.define(
  "Categorias",
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

module.exports = Categorias