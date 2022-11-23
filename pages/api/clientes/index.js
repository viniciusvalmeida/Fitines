const { DataTypes } = require('sequelize')
const sequelize = require('../../../config/sequelize') 
const Clientes = require('../../../models/clientes')(sequelize, DataTypes)
const Enderecos = require('../../../models/enderecos')(sequelize, DataTypes)

export default async function clientes(req, res) {
  const reqMethod = req.method

  switch (reqMethod) {
    case 'GET':
      const listaClientes = await Clientes.findAll()
      
      res.status(200).json(listaClientes)      
    break;
  
    case 'POST':
      const { nome, cpf, telefone } = req.body
      const { logradouro, numero, bairroId, complemento, cidadeId, estadoId, cep } = req.body
      
      const endereco = {
        logradouro,
        numero,
        bairroId,
        complemento,
        cidadeId,
        estadoId,
        cep
      }

      const { id } = await Enderecos.create(endereco)

      const cliente = {
        nome,
        cpf,
        telefone,
        enderecoId: id
      }

      await Clientes.create(cliente)
        
      res.status(200).json({ message: `Parabéns ${nome}! Agora você faz parte da família FITINES!` })        
    break;

    default:
      res.status(200).json({ message: 'Welcome to API Routes' })
    break;
  }
  
}