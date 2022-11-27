const { DataTypes } = require('sequelize')
const sequelize = require('../config/sequelize')

const Enderecos = sequelize.define(
    "Enderecos",
    {
        clienteId: DataTypes.INTEGER,
        logradouro: DataTypes.STRING,
        numero: DataTypes.STRING(4),
        bairroId: DataTypes.INTEGER,
        complemento: DataTypes.STRING,
        cidadeId: DataTypes.INTEGER,
        estadoId: DataTypes.INTEGER,
        cep: DataTypes.STRING(8),
    },

    {
        tableName: 'enderecos',
        freezeTableName: true
    }
)

module.exports = Enderecos