import db from "../../../models";

export default async function carrinho (req, res) {
  const reqMethod = req.method
  const { id } = req.query
  
  switch (reqMethod) {
    case 'GET':
      try {
        const cliente = await db.clientes.findByPk(id, {
          attributes: ['Nome']
        })

        const carrinho = await db.carrinhos.findAll({
          where: {
            ClienteId: id
          },
          attributes: ['id','Quantidade'],
          include: [
            {
              model: db.produtos,
              attributes: ['id', 'Nome', 'Preco'],
              include: [
                {
                model: db.sexo,
                attributes: ['Sexo']
                },
                {
                model: db.tamanhos,
                attributes: ['Nome']
              },
                {
                model: db.categorias,
                attributes: ['Nome']
                }
              ]
            }
          ]
        })
        
        res.status(200).json({Cliente: cliente, Carrinho: carrinho})        
      } catch (e) {
        res.status(304).json({ error: e })
      }
    break;
    
    case 'POST':
      try {
        const { ProdutoId, Quantidade } = req.body
        const carrinho = {
          ClienteId: id,
          ProdutoId,
          Quantidade
        }

        await db.carrinhos.create(carrinho)

        res.status(200).json("Produto adicionado ao carrinho")
      } catch (e) {
        res.status(304).json({ error: e})
      }
    break;

    case 'DELETE':
      try {
        const { ProdutoId } = req.body
        await db.carrinhos.destroy({
          where: {
            ClienteId: id,
            ProdutoId: ProdutoId
          }
        })

        res.status(200).json({ message: 'Produto excluído com sucesso!!' })
      } catch (e) {
        res.status(304).json({ error: e })
      }
    break;

    case 'PUT':
      try {
        const { ProdutoId, Quantidade } = req.body
        const carrinho = await db.carrinhos.findOne({ 
          where: {
            ClienteId: id,
            ProdutoId: ProdutoId
          }
         })
         carrinho.set({Quantidade})

         await carrinho.save()

         res.status(200).json({ message: 'Produto Atualizado' })
      } catch (e) {
        res.status(304).json({ error: e })
      }
    break;

    default:
        res.status(200).json({ message: 'Welcome to Carrinho API route!' })
      break;
  }
}