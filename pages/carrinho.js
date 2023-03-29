import Head from "next/head";
import { Container, Input, Table } from "reactstrap";

const Carrinho = () => {
    return (
        <>
            <Head>
                <title>Carrinho</title>
                <meta name="description" content="Meu carrinho de compras" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container className="mb-5">
                <h1 className="my-5">Carrinho</h1>

                <Table className="mb-5 shadow-lg rounded-3 table-hover text-center">
                    
                    <thead>
                        <tr className="table-dark">
                            <th>Produtos</th>
                            <th>Und</th>
                            <th>Sub-total</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Produto1</td>
                            <td>
                                <Input></Input>
                            </td>
                            <td>R$50</td>
                        </tr>
                        <tr>
                            <td>Produto2</td>
                            <td>1</td>
                            <td>R$25.99</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td colSpan={3} className="fw-bold">TOTAL: R$75.99</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    );
};

export default Carrinho;
