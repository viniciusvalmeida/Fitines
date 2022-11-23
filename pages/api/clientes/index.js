const { DataTypes } = require('sequelize')
const sequelize = require('../../../config/sequelize') 
const Clientes = require('../../../models/clientes')(sequelize,DataTypes)

export default async function clientes(req, res) {
  const reqMethod = req.method

  switch (reqMethod) {
    case 'GET':
      const listaClientes = await Clientes.findAll()
      
      res.status(200).json(listaClientes)      
    break;
  
    case 'POST':
      const { nome, cpf, telefone, enderecoId } = req.body

      const cliente = {
        nome: nome,
        cpf: cpf,
        telefone: telefone,
        enderecoId: enderecoId
      }
        
      await Clientes.create(cliente)
        
      res.status(200).json({ message: `Parabéns ${nome}! Agora você faz parte da família FITINES!` })        
    break;

    default:
      res.status(200).json({ message: 'Welcome to API Routes' })
    break;
  }
  
}