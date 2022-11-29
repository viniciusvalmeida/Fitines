const db = require("../../../models");

export default async function clientes(req, res) {
    const reqMethod = req.method;

    switch (reqMethod) {
        case "GET":
            const listaClientes = await db.Clientes.findAll({
                attributes: ["id", "Nome", "Cpf", "Telefone"],
                include: [
                  {
                    model: db.Sexo,
                    attributes: ["Sexo"],
                  },
                  {
                    model: db.Enderecos,
                    attributes: [
                      "Logradouro",
                      "Numero",
                      "Complemento",
                      "Cep",
                    ],
                    include: [{
                      model: db.Bairros,
                      attributes: [ 'Nome' ]
                    },
                    {
                      model: db.Cidades,
                      attributes: [ 'Nome' ]
                    },
                    {
                      model: db.Estados,
                      attributes: [ 'Nome' ]
                    }
                  ]
                  },
                ],
            });

            res.status(200).json(listaClientes);
            break;

        case "POST":
            const { Nome, SexoId, Cpf, Telefone } = req.body;
            const {
                Logradouro,
                Numero,
                BairroId,
                Complemento,
                CidadeId,
                EstadoId,
                Cep,
            } = req.body;

            const cliente = {
                Nome,
                SexoId,
                Cpf,
                Telefone,
            };

            const { id } = await db.Clientes.create(cliente);

            const endereco = {
                ClienteId: id,
                Logradouro,
                Numero,
                BairroId,
                Complemento,
                CidadeId,
                EstadoId,
                Cep,
            };

            await db.Enderecos.create(endereco);

            res.status(200).json({
                message: `Parabéns ${Nome}! Agora você faz parte da família FITINES!`,
            });
            break;

        default:
            res.status(200).json({ message: "Welcome to API Routes" });
            break;
    }
}
