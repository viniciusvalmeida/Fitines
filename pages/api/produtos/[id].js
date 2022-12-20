const Produtos = require('../../../models/produtos')
const Categorias = require('../../../models/categorias')
const Tamanhos = require('../../../models/Tamanhos')
const Sexo = require('../../../models/Sexo')

export default async function produto(req, res){
  const reqMethod = req.method
  const { id } = req.query
  const produto = await Produtos.findByPk(id, {
    attributes: ['id', 'Nome', 'Preco'],
      include: [
        {
          model: Tamanhos,
          attributes: ['Nome']
        },
        {
          model: Sexo,
          attributes: ['Sexo']
        },
        {
          model: Categorias,
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