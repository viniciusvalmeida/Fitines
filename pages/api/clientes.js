const { DataTypes } = require('sequelize')
const sequelize = require('../../config/sequelize') 
const Clientes = require('../../models/clientes')(sequelize,DataTypes)

export default async function handler(req, res) {
  const listaClientes = await Clientes.findAll()
  
  res.status(200).json(listaClientes)
}