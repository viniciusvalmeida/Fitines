import db from "../../../models"

export default async function produtos(req, res){
  const reqMethod = req.method

  switch (reqMethod) {
    case 'GET':
        try {
          const listaProdutos = await db.produtos.findAll({
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

          res.status(200).json(listaProdutos)
        } catch (e) {
          res.status(304).json({ error: e })
        }
      break;

    default:
        res.json({ message: 'Welcome to Produtos API Routes!' })
      break;
  }
}