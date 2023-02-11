import db from "../../../../models";

export default async function vendas(req, res) {
  const reqMethod = req.method

  switch (reqMethod) {
    case 'GET':
        try {
          const vendas = await db.vendas.findAll()
  
          res.status(200).json(vendas)
          
        } catch (e) {
          res.status(304).json({ error: e})
        }
      break;
  
    default:
        res.status(200).json({ message: 'Welcome to ADMIN Vendas API!'})
      break;
  }
}