const { DataTypes } = require('sequelize')
const sequelize = require('../../../config/sequelize') 
const Clientes = require('../../../models/clientes')(sequelize,DataTypes)

export default async function cliente(req, res) {
  const { id } = req.query
  const cliente = await Clientes.findByPk(id)
  
  res.status(200).json(cliente)
}