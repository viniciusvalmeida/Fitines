import { Table } from "reactstrap";
import { useEffect, useState } from "react";
import CarrinhoItem from "./CarrinhoItem";
import carrinhoSrv from "../services/carrinhoSrv";

const CarrinhoList = () => {
    const [ carrinho, setCarrinho ] = useState()
    
    useEffect(()=>{
        carrinhoSrv.getCarrinho().then(res => setCarrinho(res))
    },[])

    return (
        <Table className="mb-5 shadow-lg rounded-3 table-hover text-center">
            <thead>
                <tr className="table-dark">
                    <th>Produtos</th>
                    <th>Und</th>
                    <th>Sub-total</th>
                </tr>
            </thead>

            <tbody>
                {
                    carrinho && carrinho.Carrinho.map(cart => cart && <CarrinhoItem product={cart.Produto} key={cart.Produto.id} />) 
                }
                <tr>
                    <td></td>
                    <td></td>
                    <td colSpan={3} className="fw-bold">
                        TOTAL: R$75.99
                    </td>
                </tr>
            </tbody>
        </Table>
    );
};

export default CarrinhoList;
