 import db from "../../models";
  
 export const fetchProdutos = async () => {
    
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
    
    return listaProdutos.map(prod => prod.toJSON())
}

export const fetchProduto = async (id) => {
  const produto = await db.produtos.findByPk(id, {
    attributes: ['id', 'Nome', 'Preco', 'Imagem', 'Descricao'],
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

  return produto.toJSON()
}

