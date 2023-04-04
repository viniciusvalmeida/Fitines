import Image from "next/image";
import { useState } from "react";
import { Button } from "reactstrap";

function CarrinhoItem ({product}) {
    const [und, setUnd] = useState(1);

    const handleUndReduce = () => {
        und > 1 ? setUnd(und - 1) : setUnd(1);
    };

    return (
        <tr>
            <td>
                <Image className="me-1" src={`/produtos/${product.Imagem}`} alt={product.Nome} width={70} height={70}/>
                {product.Nome}
            </td>
            <td className="w-25">
                <Button
                    onClick={() => handleUndReduce()}
                    className="btn-sm me-3"
                >
                    -
                </Button>
                {und}
                <Button onClick={() => setUnd(und + 1)} className="btn-sm ms-3">
                    +
                </Button>
            </td>
            <td>R$ {product.Preco}</td>
        </tr>
    );
};

export default CarrinhoItem;
