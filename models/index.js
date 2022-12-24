import sequelize from "../config/sequelize";
import Sequelize from "sequelize";

import Bairros from "./Bairros";
import Carrinhos from "./carrinho";
import Categorias from "./categorias";
import Cidades from "./Cidades";
import Clientes from "./clientes";
import Enderecos from "./Enderecos";
import Estados from "./Estados";
import Produtos from "./produtos";
import Sexo from "./Sexo";
import Tamanhos from "./Tamanhos";

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

db.clientes.belongsTo(db.sexo)
db.clientes.hasOne(db.enderecos)

db.enderecos.belongsTo(db.bairros)
db.enderecos.belongsTo(db.cidades)
db.enderecos.belongsTo(db.estados)

db.produtos.belongsTo(db.sexo)
db.produtos.belongsTo(db.categorias)
db.produtos.belongsTo(db.tamanhos)

db.carrinhos.belongsTo(db.clientes)

export default db