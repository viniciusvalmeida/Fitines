import db from "../../../models";

export default async function carrinhos(req,res){
  const reqMethod = req.method

  switch (reqMethod) {
    case 'GET':
      const listaCarrinhos =  await db.carrinhos.findAll({
        include: [db.clientes]
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

      await db.carrinhos.create(carrinho)

      res.status(200).json({ message: 'Carrinho criado com sucesso!'})
    break;
    default:
        res.status(200).json({ message: 'Welcome to Carrinhos API route!' })
      break;
  }
}

