const Clientes = require('../../../models/Clientes')
const Sexo = require('../../../models/Sexo')
const Enderecos = require('../../../models/Enderecos')
const Bairros = require('../../../models/Bairros')
const Cidades = require('../../../models/Cidades')
const Estados = require('../../../models/Estados')

export default async function clientes(req, res) {
    const reqMethod = req.method;

    switch (reqMethod) {
        case "GET":
            const listaClientes = await Clientes.findAll({
                attributes: ["id", "Nome", "Cpf", "Telefone"],
                include: [
                  {
                    model: Sexo,
                    attributes: ["Sexo"],
                  },
                  {
                    model: Enderecos,
                    attributes: [
                      "Logradouro",
                      "Numero",
                      "Complemento",
                      "Cep",
                    ],
                    include: [{
                      model: Bairros,
                      attributes: [ 'Nome' ]
                    },
                    {
                      model: Cidades,
                      attributes: [ 'Nome' ]
                    },
                    {
                      model: Estados,
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

            const { id } = await Clientes.create(cliente);

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

            await Enderecos.create(endereco);

            res.status(200).json({
                message: `Parabéns ${Nome}! Agora você faz parte da família FITINES!`,
            });
            break;

        default:
            res.status(200).json({ message: "Welcome to Cliente API Routes" });
            break;
    }
}
