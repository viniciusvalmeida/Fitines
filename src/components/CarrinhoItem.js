import Image from "next/image";
import { useState } from "react";
import { Button } from "reactstrap";
import carrinhoSrv from "../services/carrinhoSrv";

function CarrinhoItem({ product, setTotal }) {
    const { Nome, Imagem, Preco, id } = product;

    const [und, setUnd] = useState(1);
    const [subTotal, setSubTotal] = useState(Preco);

    const handleUndReduce = () => {
        if (und > 1) {
            setUnd((u) => u - 1);
            setSubTotal((subTotal - Preco).toFixed(2));
            setTotal((t) => t - Preco);
        } else {
            setUnd(1);
        }
    };

    const handleUndSum = () => {
        setUnd((u) => u + 1);
        setSubTotal((Preco * (und + 1)).toFixed(2));
        setTotal((t) => t + parseFloat(Preco));
    };

    return (
        <tr>
            <td>
                <div className="d-flex justify-content-center align-items-center">
                    <Image
                        className="me-1"
                        src={`/produtos/${Imagem}`}
                        alt={Nome}
                        width={70}
                        height={70}
                    />
                    {Nome}
                </div>
            </td>

            <td> 
                <div className="d-flex justify-content-center align-items-center">
                    <Button
                        className="btn-sm me-3"
                        onClick={() => handleUndReduce()}
                    >
                        -
                    </Button>
                    {und}
                    <Button className="btn-sm ms-3" onClick={() => handleUndSum()}>
                        +
                    </Button>
                </div>
            </td>

            <td><div className="d-flex justify-content-center align-content-center">R$ {subTotal}</div></td>

            <td>
                    <a href="carrinho" className="link-dark" onClick={ () => carrinhoSrv.deleteProduct(id) }>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-trash"
                            viewBox="0 0 16 16"
                        >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                        </svg>
                    </a>
            </td>
        </tr>
    );
}

export default CarrinhoItem;
