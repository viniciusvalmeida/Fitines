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
    logradouro: DataTypes.STRING,
    numero: DataTypes.STRING(4),
    bairroId: DataTypes.INTEGER,
    complemento: DataTypes.STRING,
    cidadeId: DataTypes.INTEGER,
    estadoId: DataTypes.INTEGER,
    cep: DataTypes.STRING(8)
  }, {
    sequelize,
    modelName: 'enderecos',
    tableName: 'enderecos'
  });
  return enderecos;
};