const { DataTypes } = require("sequelize");
const sequelize = require('../config/sequelize');

const CarrinhosProdutos = sequelize.define(
  'CarrinhosProdutos',
  {
    Quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }
)

module.exports = CarrinhosProdutos