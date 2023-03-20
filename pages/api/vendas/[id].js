import db from "../../../models";

export default async function venda(req,res) {
  const reqMethod = req.method
  const { id } = req.query

  switch (reqMethod) {
    case 'GET':
        try {
          const venda = await db.vendas.findAll({
            attributes: ['Quantidade', 'PrecoUnd'], 
            where: { ClienteId: id },
            include: [{
              model: db.produtos,
              attributes: ['Nome'],
              include: [{
                model: db.sexo,
                attributes: ['Sexo']
              },
            {
              model: db.categorias,
              attributes: ['Nome']
            }]
            }]
          })

          res.json(venda)

        } catch (e) {
          res.status(304).json({ error: e })  
        }
      break;
  
    default:
      res.json({ message: 'Welcome to Venda API' })
      break;
  }
}