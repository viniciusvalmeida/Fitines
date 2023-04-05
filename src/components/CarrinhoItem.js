import Image from "next/image";
import { useState } from "react";
import { Button } from "reactstrap";

function CarrinhoItem ({product}) {
    const [und, setUnd] = useState(1)
    const [ subTotal, setSubTotal ] = useState(product.Preco)

    const handleUndReduce = () => {
        if (und > 1) {
            setUnd(u => u - 1)
            setSubTotal((subTotal / und).toFixed(2))
        } else {
            setUnd(1)
        }
    };

    const handleUndSum = () => {
        setUnd(u => u + 1)
        setSubTotal((subTotal * (und + 1)).toFixed(2))
    }

    return (
        <tr>
            <td>
                <Image className="me-1" src={`/produtos/${product.Imagem}`} alt={product.Nome} width={70} height={70}/>
                {product.Nome}
            </td>
            <td className="w-25">
                <Button
                    className="btn-sm me-3"
                    onClick={() => handleUndReduce()}
                >
                    -
                </Button>
                {und}
                <Button 
                    className="btn-sm ms-3"
                    onClick={() => handleUndSum()} 
                >
                    +
                </Button>
            </td>
            <td>R$ {subTotal}</td>
        </tr>
    );
};

export default CarrinhoItem;
