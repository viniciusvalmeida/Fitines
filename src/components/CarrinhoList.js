import { Table } from "reactstrap";
import CarrinhoItem from "./CarrinhoItem";

const CarrinhoList = ({ products }) => {
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
                <CarrinhoItem />
                <CarrinhoItem />
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
