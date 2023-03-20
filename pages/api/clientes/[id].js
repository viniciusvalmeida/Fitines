import db from "../../../models";

export default async function cliente(req, res) {
    const reqMethod = req.method;
    const { id } = req.query;

    const cliente = await db.clientes.findByPk(id, {
        attributes: ["id", "Nome", "Cpf", "Telefone"],
        include: [
            {
                model: db.sexo,
                attributes: ["Sexo"],
            },
            {
                model: db.enderecos,
                attributes: ["Logradouro", "Numero", "Complemento", "Cep"],
                include: [
                    {
                        model: db.bairros,
                        attributes: ["Nome"],
                    },
                    {
                        model: db.cidades,
                        attributes: ["Nome"],
                    },
                    {
                        model: db.estados,
                        attributes: ["Nome"],
                    },
                ],
            },
        ],
    });

    if (!cliente) {
        res.status(302).json({ message: 'Cliente não encontrado' })
    } else {
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
}
