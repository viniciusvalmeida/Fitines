import Image from "next/image.js";
import Link from "next/link";
import { useState } from "react";
import { Button, Card, CardBody, CardSubtitle } from "reactstrap";
import SuccessToast from "./SuccessToast.js";

const ProdutoCard = ({ product }) => {
    const [toastIsOpen, setToastIsOpen] = useState(false);
    const { id, Nome, Imagem, Preco } = product;

    const onClick = () => {
        setToastIsOpen(true);
        setTimeout(() => setToastIsOpen(false), 1000 * 3);
        const preStorage = JSON.parse(sessionStorage.getItem("itens"));

        if (preStorage) {
            preStorage.push(product);

            const itensUnicos = preStorage.filter(function (a) {
                return (
                    !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true)
                );
            }, Object.create(null));

            sessionStorage.setItem("itens", JSON.stringify(itensUnicos));
        } else {
            sessionStorage.setItem("itens", JSON.stringify([product]));
        }
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
                        onClick={onClick}
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
