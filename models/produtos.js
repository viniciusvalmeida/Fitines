const { DataTypes } = require("sequelize");
const sequelize = require('../config/sequelize');

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
    },
    Imagem: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Descricao: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }
)

module.exports = Produtos