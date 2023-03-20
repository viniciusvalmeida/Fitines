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
const Carrinho = require('../models/carrinho')

async function dbSync(){
  await sequelize.sync()
}

module.exports = dbSync()