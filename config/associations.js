const Clientes = require("../models/Clientes");
const Sexo = require("../models/Sexo");
Sexo

Clientes.hasOne(Sexo)
Sexo.belongsTo(Clientes)

module.exports = { Clientes, Sexo }