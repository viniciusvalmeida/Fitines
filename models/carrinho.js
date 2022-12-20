const { DataTypes } = require("sequelize");
const sequelize = require('../config/sequelize');
const Clientes = require('../models/clientes')
const Produtos = require('../models/produtos')

const Carrinhos = sequelize.define(
  'Carrinhos',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    ClienteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Clientes',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    ProdutoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Produtos',
        key: 'id'
      }
    },
    Qtd: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }
)

Carrinhos.belongsTo(Clientes)
Carrinhos.belongsTo(Produtos)

module.exports = Carrinhos