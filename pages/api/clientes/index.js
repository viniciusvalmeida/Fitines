const Clientes = require('../../../models/clientes')
const Enderecos = require('../../../models/Enderecos')

export default async function clientes(req, res) {
  const reqMethod = req.method

  switch (reqMethod) {
    case 'GET':
      const listaClientes = await Clientes.findAll()
      
      res.status(200).json(listaClientes)      
    break;
  
    case 'POST':
      const { nome, sexoId, cpf, telefone } = req.body
      const { logradouro, numero, bairroId, complemento, cidadeId, estadoId, cep } = req.body
      
      const cliente = {
        nome,
        sexoId,
        cpf,
        telefone
      }

      const { id } = await Clientes.create(cliente)
      
      const endereco = {
        clienteId: id,
        logradouro,
        numero,
        bairroId,
        complemento,
        cidadeId,
        estadoId,
        cep
      }

      await Enderecos.create(endereco)
        
      res.status(200).json({ message: `Parabéns ${nome}! Agora você faz parte da família FITINES!` })        
    break;

    default:
      res.status(200).json({ message: 'Welcome to API Routes' })
    break;
  }
  
}