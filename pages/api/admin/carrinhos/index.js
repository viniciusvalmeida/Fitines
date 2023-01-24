import db from "../../../../models";

export default async function carrinhosAdmin(req,res){
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

    default:
        res.status(200).json({ message: 'Welcome to Carrinhos API route!' })
      break;
  }
}

