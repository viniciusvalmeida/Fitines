import Head from "next/head";
import Header from "../../src/components/Header";
import { Container } from "reactstrap";
import ProdutoDetails from "../../src/components/ProdutoDetails";
import { fetchProduto, fetchProdutos } from "../../src/services/produtos";

export const getStaticProps = async (context) => {
    const id = context.params.id;

    if (typeof id === "string") {
        const product = await fetchProduto(id);

        return { props: { product }, revalidate: 10 };
    }

    return { redirect: { destination: "/produtos", permanent: false } };
};

export const getStaticPaths = async () => {
    const products = await fetchProdutos();

    const paths = products.map((product) => {
        return { params: { id: product.id.toString() } };
    });

    return { paths, fallback: false };
};

const Product = (props) => {
    return (
        <>
            <Head>
                <title>{props.product.Nome}</title>
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

            <div>
                <Head>
                    <title>{props.product.Nome}</title>
                    <meta
                        name="description"
                        content={props.product.Descricao}
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Container className="mt-5">
                    <ProdutoDetails product={props.product} />
                </Container>
            </div>
        </>
    );
};

export default Product;
