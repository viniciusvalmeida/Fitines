import db from "../../../models"

export default async function produto(req, res){
  const reqMethod = req.method
  const { id } = req.query

  const produto = await db.produtos.findByPk(id, {
    attributes: ['id', 'Nome', 'Preco'],
      include: [
        {
          model: db.tamanhos,
          attributes: ['Nome']
        },
        {
          model: db.sexo,
          attributes: ['Sexo']
        },
        {
          model: db.categorias,
          attributes: ['Nome']
        }
      ]
  })

  if (!produto) {
    res.status(302).json({ error: 'Produto não encontrado!' })
  } else {
    switch (reqMethod) {
      case 'GET':
          try {          
            res.status(200).json(produto)
  
          } catch (e) {
            res.status(302).json({ error: e })
          }
        break;

      case 'POST':
          const { CarrinhoId, Quantidade } = req.body
          const carrinho = await db.carrinhos.findByPk(CarrinhoId,{
            include: [{
              model: db.produtos
            }]
          })
          
          try {
            await produto.addCarrinho(carrinho, { through: {Quantidade}})

            res.status(200).json(carrinho)
          } catch (e) {
            res.status(304).json({ error: e })
          }

      break;
    
      case 'DELETE':
          try {
            await produto.destroy()
            
            res.status(200).json({ message: 'Produto excluído com sucesso!' })
          } catch (e) {
            res.status(304).json({ error: e })
          }
      break;

      case 'PUT':
          const { Nome, Preco, SexoId, CategoriaId, TamanhoId } = req.body

          produto.set({
            Nome,
            Preco,
            SexoId,
            CategoriaId,
            TamanhoId
          })

          try {
            await produto.save()

            res.status(200).json({ message: 'Produto Atualizado!'})
          } catch (e) {
            res.status(304).json({ error: e })
          }
      break;

      default:
          res.status(200).json({ message: 'Welcome to Produto ID API route!'})
        break;
    }
  }
}