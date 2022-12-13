const Clientes = require("../../../models/Clientes");
const Sexo = require("../../../models/Sexo");
const Enderecos = require("../../../models/Enderecos");
const Bairros = require("../../../models/Bairros");
const Cidades = require("../../../models/Cidades");
const Estados = require("../../../models/Estados");

export default async function cliente(req, res) {
    const reqMethod = req.method;
    const { id } = req.query;

    const cliente = await Clientes.findByPk(id, {
        attributes: ["id", "Nome", "Cpf", "Telefone"],
        include: [
            {
                model: Sexo,
                attributes: ["Sexo"],
            },
            {
                model: Enderecos,
                attributes: ["Logradouro", "Numero", "Complemento", "Cep"],
                include: [
                    {
                        model: Bairros,
                        attributes: ["Nome"],
                    },
                    {
                        model: Cidades,
                        attributes: ["Nome"],
                    },
                    {
                        model: Estados,
                        attributes: ["Nome"],
                    },
                ],
            },
        ],
    });

    switch (reqMethod) {
        case "GET":
            try {
                res.status(200).json(cliente);
            } catch (e) {
                res.status(403).json({ error: e });
            }
            break;

        case "DELETE":
            try {
                await cliente.destroy();

                res.status(200).json({
                    message: `Cliente ${cliente.Nome} excluído com sucesso!`,
                });
            } catch (e) {
                res.status(403).json({ error: e });
            }
            break;

        case "PUT":
            const { Nome, SexoId, Cpf, Telefone } = req.body;

            cliente.set({
                Nome,
                SexoId,
                Cpf,
                Telefone,
            });

            try {
                await cliente.save();

                res.status(200).json({
                    message: "Cliente Atualizado com sucesso",
                });
            } catch (e) {
                res.status(304).json({ error: e });
            }

            break;

        default:
            res.status(200).json({ message: "Welcome to Clientes API" });
            break;
    }
}
