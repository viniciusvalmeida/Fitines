const { DataTypes } = require("sequelize");
const sequelize = require('../config/sequelize');
const Categorias = require("./categorias");
const Sexo = require("./Sexo");
const Tamanhos = require("./Tamanhos");

const Produtos = sequelize.define(
  "Produtos",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    Nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Preco: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    SexoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Sexo',
        key: 'id'
      }
    },
    CategoriaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Categorias',
        key: 'id'
      }
    },
    TamanhoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Tamanhos',
        key: 'id'
      }
    }
  },
  
  {
    timestamps: false
  }
)

Produtos.belongsTo([Sexo, Categorias, Tamanhos])

Produtos.sync()

module.exports = Produtos