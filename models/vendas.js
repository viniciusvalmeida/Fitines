const { DataTypes } = require("sequelize");
const sequelize = require('../config/sequelize');
const Carrinho = require('../models/carrinho')

const Vendas = sequelize.define(
  'Vendas',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    CarrinhoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Carrinhos',
        key: 'id'
      }
    },
    Total: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }
)

Vendas.belongsTo(Carrinho)

module.exports = Vendas