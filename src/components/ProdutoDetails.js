import Image from "next/image";
import React, { useState } from "react";
import { Button, Col, Row } from "reactstrap";
import SuccessToast from "./SuccessToast";

const ProductDetails = ({ product }) => {
    const [toastIsOpen, setToastIsOpen] = useState(false);

    return (
        <Row>
            <Col lg={6}>
                <Image
                    src={`/produtos/${product.Imagem}`}
                    alt={product.Nome}
                    height={500}
                    width={500}
                    style={{maxWidth: '100%'}}
                    
                />
            </Col>

            <Col lg={6}>
                <h1>{product.Nome}</h1>

                <h2 className="text-muted">R$ {product.Preco}</h2>

                <p className="my-3">
                    <span className="d-block font-weight-bold">Descrição:</span>
                    {product.Descricao}
                </p>

                <Button 
                  color="dark" 
                  className="my-3 pb-2"
                  onClick={() => {
                    setToastIsOpen(true);
                    setTimeout(() => setToastIsOpen(false), 1000 * 3);
                  }}
                >
                    Compre agora
                </Button>

                <SuccessToast
                    toastIsOpen={toastIsOpen}
                    setToastIsOpen={setToastIsOpen}
                />
            </Col>
        </Row>
    );
};

export default ProductDetails;
