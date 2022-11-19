'use strict';
const {
  Model,
  DataTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  clientes.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING(11),
    telefone: DataTypes.STRING(11),
    enderecoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'clientes',
    tableName: 'clientes'
  });
  return clientes;
};