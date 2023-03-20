import sequelize from "../config/sequelize";
import Sequelize from "sequelize";

import Bairros from "./bairros";
import Carrinhos from "./carrinho";
import Categorias from "./categorias";
import Cidades from "./cidades";
import Clientes from "./clientes";
import Enderecos from "./enderecos";
import Estados from "./estados";
import Produtos from "./produtos";
import Sexo from "./sexo";
import Tamanhos from "./tamanhos";
import Vendas from "./vendas"

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.bairros = Bairros
db.carrinhos = Carrinhos
db.categorias = Categorias
db.cidades = Cidades
db.clientes = Clientes
db.enderecos = Enderecos
db.estados = Estados
db.produtos = Produtos
db.sexo = Sexo
db.tamanhos = Tamanhos
db.vendas = Vendas

db.clientes.belongsTo(db.sexo)
db.clientes.hasOne(db.enderecos)

db.enderecos.belongsTo(db.bairros)
db.enderecos.belongsTo(db.cidades)
db.enderecos.belongsTo(db.estados)

db.produtos.belongsTo(db.sexo)
db.produtos.belongsTo(db.categorias)
db.produtos.belongsTo(db.tamanhos)

db.carrinhos.belongsTo(db.clientes)
db.carrinhos.belongsTo(db.produtos)

db.vendas.belongsTo(db.clientes)
db.vendas.belongsTo(db.produtos)

db.sequelize.sync()
  .then(() => console.log('DB Sync!!'))

export default db