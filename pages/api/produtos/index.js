const Produtos = require('../../../models/produtos')
const Categorias = require('../../../models/categorias')
const Tamanhos = require('../../../models/Tamanhos')
const Sexo = require('../../../models/Sexo')

export default async function produtos(req, res){
  const reqMethod = req.method

  switch (reqMethod) {
    case 'GET':
        try {
          const listaProdutos = await Produtos.findAll({
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

          res.status(200).json(listaProdutos)
        } catch (e) {
          res.status(304).json({ error: e })
        }
      break;

    case 'POST':
        const { Nome, Preco, SexoId, CategoriaId, TamanhoId } = req.body

        try {
          const produto = {
            Nome,
            Preco,
            SexoId,
            CategoriaId,
            TamanhoId
          }

          await Produtos.create(produto)

          res.status(200).json({ message: `Produto ${Nome} adicionado` })
        } catch (e) {
          res.status(304).json({ error: e })
        }
    break;
  
    default:
        res.json({ message: 'Welcome to Produtos API Routes!' })
      break;
  }
}