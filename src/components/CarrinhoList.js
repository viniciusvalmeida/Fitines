import { Table } from "reactstrap";
import CarrinhoItem from "./CarrinhoItem";
import { useState } from "react";

const CarrinhoList = ({ carrinho }) => {
    
    const initialTotalState = carrinho.Carrinho.reduce((acc, item) => {
        return  acc + parseFloat(item.Produto.Preco)
    }, 0)

    const [ total, setTotal ] = useState(initialTotalState)
    
    return (
        <Table className="mb-5 shadow-lg rounded-3 table-hover text-center">
            <thead>
                <tr className="table-dark">
                    <th>Produtos</th>
                    <th>Und</th>
                    <th>Sub-total</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                {
                    carrinho.Carrinho.map(cart => <CarrinhoItem product={cart.Produto} key={cart.Produto.id} setTotal={setTotal} />) 
                }
                <tr>
                    <td></td>
                    <td></td>
                    <td colSpan={1} className="fw-bold">
                        TOTAL: R${total.toFixed(2)}
                    </td>
                </tr>
            </tbody>
        </Table>
    );
};

export default CarrinhoList;
