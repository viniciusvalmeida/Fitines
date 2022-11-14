'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class enderecos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  enderecos.init({
    clienteId: DataTypes.INTEGER,
    logradouro: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    bairroId: DataTypes.INTEGER,
    complemento: DataTypes.STRING,
    cidadeId: DataTypes.INTEGER,
    estadoId: DataTypes.INTEGER,
    cep: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'enderecos',
  });
  return enderecos;
};