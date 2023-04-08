import Head from "next/head";
import { Container } from "reactstrap";
import CarrinhoList from "../src/components/CarrinhoList";
import carrinhoSrv from "../src/services/carrinhoSrv";

export async function getServerSideProps() {
    const carrinho = await carrinhoSrv.getCarrinho()
    return { props: { carrinho } }
}

const Carrinho = ({ carrinho }) => {
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
                <CarrinhoList carrinho={carrinho}/>
            </Container>
        </>
    );
};

export default Carrinho;
