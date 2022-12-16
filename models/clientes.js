const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const Enderecos = require("./Enderecos");
const Sexo = require("./Sexo");

const Clientes = sequelize.define(
    "Clientes",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        Nome: {
            type: DataTypes.STRING,
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
        Cpf: {
            type: DataTypes.STRING(11),
            allowNull: false
        },
        Telefone: {
            type: DataTypes.STRING(11),
            allowNull: false
        }
    
    }
);

Clientes.belongsTo(Sexo)
Clientes.hasOne(Enderecos)

module.exports = Clientes;