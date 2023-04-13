import Head from "next/head";
import Header from "../src/components/Header";
import { Container } from "reactstrap";
import ProdutosList from "../src/components/ProdutosList";
import { fetchProdutos } from "../src/services/produtos";
import Footer from "../src/components/Footer";

export const getStaticProps = async () => {
    const products = await fetchProdutos();
    return { props: { products } };
};

const Products = (props) => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Head>
                <title>Nossos Produtos</title>
                <meta
                    name="description"
                    content="Conheça todos os nossos produtos"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className="flex-grow-1">
                <Container className="mb-5">
                    <h1 className="my-5">Nossos Produtos</h1>

                    {<ProdutosList products={props.products} />}
                </Container>
            </main>
            
            <Footer />
        </div>
    );
};

export default Products;
