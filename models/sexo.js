'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sexo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo()
    }
  }
  sexo.init({
    id: DataTypes.INTEGER,
    sexo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'sexo',
    tableName: 'sexo',
    freezeTableName: true
  });
  return sexo;
};