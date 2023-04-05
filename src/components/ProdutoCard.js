import Image from "next/image.js";
import Link from "next/link";
import { useState } from "react";
import { Button, Card, CardBody, CardSubtitle } from "reactstrap";
import SuccessToast from "./SuccessToast.js";
import carrinhoServ from "../services/carrinhoSrv.js";

const ProdutoCard = ({ product }) => {
    const [toastIsOpen, setToastIsOpen] = useState(false);
    const { id, Nome, Imagem, Preco } = product;

    const handleClick = async (id) => {
        setToastIsOpen(true);
        setTimeout(() => setToastIsOpen(false), 1000 * 3);
        
        await carrinhoServ.addProduto(id)   
    };

    return (
        <>
            <Card>
                <CardBody>
                    <Link href={`/produtos/${id}`}>
                        <Image
                            className="card-img-top"
                            src={`/produtos/${Imagem}`}
                            alt="Product"
                            height={300}
                            width={600}
                            priority
                        />
                    </Link>

                    <Link
                        href={`/produtos/${id}`}
                        className="link-dark text-decoration-none"
                    >
                        <h5
                            className="card-title"
                            style={{ cursor: "pointer" }}
                        >
                            {Nome}
                        </h5>
                    </Link>

                    <CardSubtitle className="mb-3 text-muted" tag="h6">
                        R$ {Preco}
                    </CardSubtitle>

                    <Button
                        color="dark"
                        className="pb-2"
                        block
                        onClick={() => handleClick(id)}
                    >
                        Adicionar ao Carrinho
                    </Button>
                </CardBody>
            </Card>
            <SuccessToast
                toastIsOpen={toastIsOpen}
                setToastIsOpen={setToastIsOpen}
            />
        </>
    );
};

export default ProdutoCard;
