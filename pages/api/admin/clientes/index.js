import db from "../../../../models"

export default async function clientesAdmin(req, res) {
    const reqMethod = req.method;

    switch (reqMethod) {
        case "GET":
            const listaClientes = await db.clientes.findAll({
                attributes: ["id", "Nome", "Cpf", "Telefone"],
                include: [
                  {
                    model: db.sexo,
                    attributes: ["Sexo"],
                  },
                  {
                    model: db.enderecos,
                    attributes: [
                      "Logradouro",
                      "Numero",
                      "Complemento",
                      "Cep",
                    ],
                    include: [{
                      model: db.bairros,
                      attributes: [ 'Nome' ]
                    },
                    {
                      model: db.cidades,
                      attributes: [ 'Nome' ]
                    },
                    {
                      model: db.estados,
                      attributes: [ 'Nome' ]
                    }
                  ]
                  },
                ],
            });

            res.status(200).json(listaClientes);
            break;

        default:
            res.status(200).json({ message: "Welcome to Cliente API Routes" });
            break;
    }
}