'use strict';

const fs = require('fs');
const path = require('path');
const {Sequelize, DataTypes, BelongsTo} = require('sequelize');
const basename = path.basename(__filename);
const sequelize = require('../config/sequelize');
const db = {};

const Clientes = require('./Clientes.js');
const Sexo = require('./sexo.js');
const Enderecos = require('./Enderecos.js');
const Bairros = require('./Bairros');
const Cidades = require('./Cidades');
const Estados = require('./Estados');

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Bairros = Bairros
db.Cidades = Cidades
db.Estados = Estados
db.Clientes = Clientes
db.Sexo = Sexo
db.Enderecos = Enderecos

db.Clientes.belongsTo(db.Sexo)
db.Clientes.hasOne(db.Enderecos)

db.Enderecos.belongsTo(db.Bairros)
db.Enderecos.belongsTo(db.Cidades)
db.Enderecos.belongsTo(db.Estados)

module.exports = db;
