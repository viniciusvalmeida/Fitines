import db from "../../../models";

export default async function clientes(req, res) {
    const reqMethod = req.method;

    switch (reqMethod) {
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

            const { id } = await db.clientes.create(cliente);

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

            await db.enderecos.create(endereco);

            res.status(200).json({
                message: `Parabéns ${Nome}! Agora você faz parte da família FITINES!`,
            });
            break;

        default:
            res.status(200).json({ message: "Welcome to Cliente API Routes" });
            break;
    }
}
