import Link from "next/link";
import React, { useState } from "react";
import { Button, Card, CardBody, CardSubtitle } from "reactstrap";
import SuccessToast from "./SuccessToast.js";

const ProdutoCard = ({ product }) => {
    const [toastIsOpen, setToastIsOpen] = useState(false);
    const { id, Nome, Preco } = product;

    return (
        <>
            <Card>
                <CardBody>
                    <Link href={`/products/${id}`}>
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
                        onClick={() => {
                            setToastIsOpen(true);
                            setTimeout(() => setToastIsOpen(false), 1000 * 3);
                        }}
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
