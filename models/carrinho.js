const { DataTypes } = require("sequelize");
const sequelize = require('../config/sequelize');
const Clientes = require('../models/clientes')
const Produtos = require('../models/produtos')

const Carrinhos = sequelize.define(
  'Carrinhos',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
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
    }
  },
  {
    freezeTableName: true
  }
)

module.exports = Carrinhos