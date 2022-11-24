const { DataTypes } = require('sequelize')
const sequelize = require('../../../config/sequelize') 
const Clientes = require('../../../models/clientes')(sequelize,DataTypes)

export default async function cliente(req, res) {
  const reqMethod = req.method
  const { id } = req.query
  const cliente = await Clientes.findByPk(id)

  switch (reqMethod) {
    case 'GET':
      res.status(200).json(cliente)
    break;

    case 'DELETE':
      await Clientes.destroy({
        where: { id: id }
      })

      res.status(200).json({ message: `Cliente ${cliente.nome} excluído com sucesso!` })
    break;
  
    default:
      res.status(200).json({ message: 'Welcome to Clientes API' })
    break;
  }
  
}