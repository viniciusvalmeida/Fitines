import { json } from "sequelize";
import db from "../../../models";

export default async function carrinhos(req,res){
  const reqMethod = req.method

  switch (reqMethod) {
    case 'GET':
      const listaCarrinhos =  await db.carrinhos.findAll({
        attributes: ['Quantidade'],
        include: [
          {
            model: db.clientes,
            attributes: ['id', 'Nome', 'Cpf', 'Telefone'],
            include: [
             {
              model: db.sexo,
              attributes: ['Sexo']
             }
            ]
          }, 
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
    
      res.json(listaCarrinhos)
      
      break;
  
    case 'POST':

      try {
        const { ClienteId, ProdutoId, Quantidade } = req.body
        const {Preco} =  await db.produtos.findByPk(ProdutoId, { attributes: ['Preco'] })
  
        const carrinho = {
          ClienteId,
          ProdutoId,
          Quantidade,
          PrecoUnd: Preco
        }
  
        await db.carrinhos.create(carrinho)
  
        res.status(200).json({ message: 'Carrinho criado com sucesso!'})
        
      } catch (e) {
        res.status(302).json({ error: e })
      }
    break;
    default:
        res.status(200).json({ message: 'Welcome to Carrinhos API route!' })
      break;
  }
}

