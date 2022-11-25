"use strict";
const { Model } = require("sequelize");
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
    clientes.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            nome: DataTypes.STRING,
            sexoId: DataTypes.STRING,
            cpf: DataTypes.STRING(11),
            telefone: DataTypes.STRING(11),
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: "clientes",
            tableName: "clientes",
        }
    );
    return clientes;
};
