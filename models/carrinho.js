const { DataTypes } = require("sequelize");
const sequelize = require('../config/sequelize');

const Carrinhos = sequelize.define(
  'Carrinhos',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
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
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    Quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    freezeTableName: true
  }
)

module.exports = Carrinhos