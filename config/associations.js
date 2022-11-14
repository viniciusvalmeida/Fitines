const clientes = require('../models/clientes')
const bairros = require('../models/bairros')
const enderecos = require('../models/enderecos')
const cidades = require('../models/cidades')
const estados = require('../models/estados')

clientes.hasOne(enderecos, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})

enderecos.belongsTo(clientes, {
  foreingKey: 'enderecoId',
  as: 'endereco'
})

module.exports = { clientes, enderecos }