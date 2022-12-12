const Clientes = require('../../../models/Clientes')

export default async function cliente(req, res) {
  const reqMethod = req.method
  const { id } = req.query
  const cliente = await Clientes.findByPk(id, {
    attributes: ["id", "Nome", "Cpf", "Telefone"]
  })

  switch (reqMethod) {
    case 'GET':
      res.status(200).json(cliente)
    break;

    case 'DELETE':
      await cliente.destroy()

      res.status(200).json({ message: `Cliente ${cliente.Nome} excluído com sucesso!` })
    break;

    case 'PUT':
      const { Nome, SexoId, Cpf, Telefone } = req.body
    
      const clienteUptd = {
        Nome,
        SexoId,
        Cpf,
        Telefone
      }

      try {
        await Clientes.update(
          clienteUptd,
          {
            where: { 
              id: id
            }
          }
        )

        res.status(200).json({ message: 'Cliente Atualizado com sucesso' })
        
      } catch (e) {
        res.status(304).json({ error: e })
      }
      
    break;
  
    default:
      res.status(200).json({ message: 'Welcome to Clientes API' })
    break;
  }
  
}