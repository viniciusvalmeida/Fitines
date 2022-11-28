const db = require('../../../models')

export default async function cliente(req, res) {
  const reqMethod = req.method
  const { id } = req.query
  const cliente = await db.Clientes.findByPk(id)

  switch (reqMethod) {
    case 'GET':
      res.status(200).json(cliente)
    break;

    case 'DELETE':
      await db.Clientes.destroy({
        where: { id: id }
      })

      res.status(200).json({ message: `Cliente ${cliente.Nome} excluído com sucesso!` })
    break;
  
    default:
      res.status(200).json({ message: 'Welcome to Clientes API' })
    break;
  }
  
}