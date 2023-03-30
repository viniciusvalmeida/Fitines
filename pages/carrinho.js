import Head from "next/head";
import { Container } from "reactstrap";
import CarrinhoList from "../src/components/CarrinhoList";

const Carrinho = ({ products }) => {
    return (
        <>
            <Head>
                <title>Carrinho</title>
                <meta name="description" content="Meu carrinho de compras" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container className="mb-5">
                <Container className="my-5">
                    <h1>Carrinho</h1>
                </Container>
                <CarrinhoList/>
            </Container>
        </>
    );
};

export default Carrinho;
