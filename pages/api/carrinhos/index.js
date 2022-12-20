const Carrinhos = require('../../../models/carrinho')
const Clientes = require('../../../models/clientes')
const Produtos = require('../../../models/produtos')

export default async function carrinhos(req,res){
  const reqMethod = req.method

  switch (reqMethod) {
    case 'GET':
      const listaCarrinhos =  await Carrinhos.findAll({
        include: [Clientes, Produtos]
      })
    
      res.json(listaCarrinhos)
      
      break;
  
    case 'POST':
      const { ClienteId, ProdutoId, Qtd, Total} = req.body

      const carrinho = {
        ClienteId,
        ProdutoId,
        Qtd,
        Total
      }

      await Carrinhos.create(carrinho)

      res.status(200).json({ message: 'Carrinho criado com sucesso!'})
    break;
    default:
        res.status(200).json({ message: 'Welcome to Carrinhos API route!' })
      break;
  }
}

