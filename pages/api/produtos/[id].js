import db from "../../../models"

export default async function produto(req, res){
  const reqMethod = req.method
  const { id } = req.query

  const produto = await db.produtos.findByPk(id, {
    attributes: ['id', 'Nome', 'Preco', 'Imagem'],
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

      default:
          res.status(200).json({ message: 'Welcome to Produto ID API route!'})
        break;
    }
  }
}