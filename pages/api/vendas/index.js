import db from "../../../models";

export default async function vendas(req, res) {
  const reqMethod = req.method

  switch (reqMethod) {
    case 'POST':
      try {
        const { ClienteId } = req.body
        const carrinho = await db.carrinhos.findAll({
          where: {
            ClienteId
          },
          attributes: ['ClienteId', 'ProdutoId','Quantidade','PrecoUnd']
        })

        carrinho.forEach(async carrinho => {
          await db.vendas.create(carrinho.toJSON())
        })

        res.json({ message: 'Venda Registrada' })
      } catch (e) {
        res.status(304).json({ error: e })
      }
    break;
    default:
        res.status(200).json({ message: 'Welcome to Vendas API!'})
      break;
  }
}