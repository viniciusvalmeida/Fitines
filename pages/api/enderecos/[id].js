import db from "../../../models";

export default async function endereco(req,res){
  const { id } = req.query
  const reqMethod = req.method
  
  switch (reqMethod) {
    case 'PUT':
        try {
          const { Logradouro, Numero, Complemento, BairroId, CidadeId, EstadoId, Cep  } = req.body
          const enderecoUpdt = {
            Logradouro,
            Numero,
            Complemento,
            BairroId,
            CidadeId,
            EstadoId,
            Cep,
          }

          await db.enderecos.update(
            enderecoUpdt,
            {
              where: { ClienteId: id }
            }
          )

          res.status(200).json({ message: 'Endereço atualizado com sucesso!' })
          
        } catch (e) {
          res.status(304).json({ error: e })
        }
      break;
  
    default:
        res.status(200).json({ message: 'Welcome to Enderecos API' })
      break;
  }

}