import Image from "next/image";
import { useState } from "react";
import { Button } from "reactstrap";

function CarrinhoItem ({product, setTotal}) {
    const { Nome, Imagem, Preco } = product

    const [und, setUnd] = useState(1)
    const [ subTotal, setSubTotal ] = useState(Preco)

    const handleUndReduce = () => {
        if (und > 1) {
            setUnd(u => u - 1)
            setSubTotal((subTotal - Preco).toFixed(2))
            setTotal(t => t - Preco)
        } else {
            setUnd(1)
        }
    };

    const handleUndSum = () => {
        setUnd(u => u + 1)
        setSubTotal((Preco * (und + 1)).toFixed(2))
        setTotal(t => t + parseFloat(Preco))
    }

    return (
        <tr>
            <td>
                <Image className="me-1" src={`/produtos/${Imagem}`} alt={Nome} width={70} height={70}/>
                {Nome}
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
