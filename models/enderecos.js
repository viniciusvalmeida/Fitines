const { DataTypes } = require('sequelize')
const sequelize = require('../config/sequelize')

const Enderecos = sequelize.define(
    "Enderecos",
    {
        ClienteId: DataTypes.INTEGER,
        Logradouro: DataTypes.STRING,
        Numero: DataTypes.STRING(4),
        Complemento: DataTypes.STRING,
        BairroId: DataTypes.INTEGER,
        CidadeId: DataTypes.INTEGER,
        EstadoId: DataTypes.INTEGER,
        Cep: DataTypes.STRING(8),
    }
)

module.exports = Enderecos