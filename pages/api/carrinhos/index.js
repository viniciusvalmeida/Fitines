import db from "../../../models";

export default async function carrinhos(req,res){
  const reqMethod = req.method

  switch (reqMethod) {
    case 'GET':
      const listaCarrinhos =  await db.carrinhos.findAll({
        include: [db.clientes, db.produtos]
      })
    
      res.json(listaCarrinhos)
      
      break;
  
    case 'POST':
      const { ClienteId } = req.body

      const carrinho = {
        ClienteId
      }

      await db.carrinhos.create(carrinho)

      res.status(200).json({ message: 'Carrinho criado com sucesso!'})
    break;
    default:
        res.status(200).json({ message: 'Welcome to Carrinhos API route!' })
      break;
  }
}

