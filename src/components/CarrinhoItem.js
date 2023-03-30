import { useState } from "react";
import { Button } from "reactstrap";

const CarrinhoItem = ({ product }) => {
    const [und, setUnd] = useState(1);

    const handleUndReduce = () => {
        und > 1 ? setUnd(und - 1) : setUnd(1);
    };
    return (
        <tr>
            <td>Produto1</td>
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
            <td>R$50</td>
        </tr>
    );
};

export default CarrinhoItem;
