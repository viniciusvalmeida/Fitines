import Head from "next/head";
import Header from "../src/components/Header";
import { Container } from "reactstrap";
import CarrinhoList from "../src/components/CarrinhoList";
import carrinhoSrv from "../src/services/carrinhoSrv";
import Footer from "../src/components/Footer";

export async function getServerSideProps() {
    const carrinho = await carrinhoSrv.getCarrinho()
    return { props: { carrinho } }
}

const Carrinho = ({ carrinho }) => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Head>
                <title>Carrinho</title>
                <meta name="description" content="Meu carrinho de compras" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className="flex-grow-1">
                <Container className="mb-5">
                    <Container className="my-5">
                        <h1>Carrinho</h1>
                    </Container>
                    <CarrinhoList carrinho={carrinho}/>
                </Container>
            </main>

            <Footer />
        </div>
    );
};

export default Carrinho;
