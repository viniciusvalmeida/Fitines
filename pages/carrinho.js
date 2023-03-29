import Head from "next/head";
import { useState } from "react";
import { Button, Container, Table } from "reactstrap";

const Carrinho = ({product}) => {
    const [ und, setUnd ] = useState(1)

    const handleUndReduce = () => {
        und > 1 ? setUnd( und - 1 ) : setUnd(1)
    }
    

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
                            <td className="w-25">
                                <Button
                                    onClick={()=>handleUndReduce()}
                                    className="btn-sm me-3"
                                >
                                    -
                                </Button>
                                {und}
                                <Button
                                    onClick={() => setUnd(und + 1)}
                                    className="btn-sm ms-3"
                                >
                                    +
                                </Button>
                            </td>
                            <td>R$50</td>
                        </tr>
                        <tr>
                            <td>Produto2</td>
                            <td className="w-25">
                                <Button
                                    onClick={()=>handleUndMinor()}
                                    className="btn-sm me-3"
                                >
                                    -
                                </Button>
                                {und}
                                <Button
                                    onClick={() => setUnd(und + 1)}
                                    className="btn-sm ms-3"
                                >
                                    +
                                </Button>
                            </td>
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
