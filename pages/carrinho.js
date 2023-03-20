import Head from "next/head";
import { Container } from "reactstrap";

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
            </Container>
        </>
    );
};

export default Carrinho;
