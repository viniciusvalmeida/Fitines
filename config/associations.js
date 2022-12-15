const sequelize = require('./sequelize')

const Sexo = require('../models/sexo')
const Bairros = require('../models/bairros')
const Categorias = require('../models/categorias')
const Cidades = require('../models/cidades')
const Clientes = require('../models/clientes')
const Enderecos = require('../models/enderecos')
const Estados = require('../models/estados')
const Produtos = require('../models/produtos')
const Tamanhos = require('../models/tamanhos')


async function dbSync(){
  Clientes.belongsTo(Sexo)
  Clientes.hasOne(Enderecos)
  
  Enderecos.belongsTo(Bairros)
  Enderecos.belongsTo(Cidades)
  Enderecos.belongsTo(Estados)
  
  Produtos.belongsTo(Sexo)
  Produtos.belongsTo(Categorias)
  Produtos.belongsTo(Tamanhos)
  
  await sequelize.sync()
}

module.exports = dbSync