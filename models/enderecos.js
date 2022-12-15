const { DataTypes } = require('sequelize')
const sequelize = require('../config/sequelize')
const Bairros = require('./Bairros')
const Cidades = require('./Cidades')
const Estados = require('./Estados')

const Enderecos = sequelize.define(
    "Enderecos",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
          },
        ClienteId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Clientes',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        Logradouro: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Numero: {
            type: DataTypes.STRING(4),
            allowNull: false
        },
        Complemento: {
            type: DataTypes.STRING,
        },
        BairroId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        CidadeId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        EstadoId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Cep: {
            type: DataTypes.STRING(8),
            allowNull: false
        }
    }
)

Enderecos.belongsTo(Bairros)
Enderecos.belongsTo(Cidades)
Enderecos.belongsTo(Estados)

Enderecos.sync()

module.exports = Enderecos