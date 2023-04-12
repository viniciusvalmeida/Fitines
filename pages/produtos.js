import Head from "next/head";
import Header from "../src/components/Header";
import { Container } from "reactstrap";
import ProdutosList from "../src/components/ProdutosList";
import { fetchProdutos } from "../src/services/produtos";

export const getStaticProps = async () => {
    const products = await fetchProdutos();
    return { props: { products } };
};

const Products = (props) => {
    return (
        <>
            <Head>
                <title>Produtos</title>
                <meta name="description" content="Produtos FitInês" />
                <meta charSet="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="icon" href={`${process.env.NEXT_PUBLIC_HOST_ADDRESS}/favicon.ico?v=2`} />
            </Head>

            <Header />

            <Head>
                <title>Nossos Produtos</title>
                <meta
                    name="description"
                    content="Conheça todos os nossos produtos"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container className="mb-5">
                <h1 className="my-5">Nossos Produtos</h1>

                {<ProdutosList products={props.products} />}
            </Container>
        </>
    );
};

export default Products;
