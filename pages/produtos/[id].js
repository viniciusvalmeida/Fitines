import Head from "next/head";
import { Container } from "reactstrap";
import ProdutoDetails from "../src/components/ProdutoDetails";
import { fetchProduto, fetchProdutos } from "../src/services/produtos";

export const getStaticProps = async (context) => {
  const id = context.params.id

  if (typeof id === 'string') {
    const product = await fetchProduto(id)

    return { props: { product }, revalidate: 10  }
  }

  return { redirect: { destination: '../produtos', permanent: false } }
}

export const getStaticPaths = async () => {
  const products = await fetchProdutos()

  const paths = products.map(product => {
    return { params: { id: product.id.toString() } }
  })

  return { paths, fallback: false }
}

const Product= (props) => {
  return (
    <div>
      <Head>
        <title>{props.product.Nome}</title>
        <meta name="description" content={props.product.Descricao} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container className="mt-5">
        <ProdutoDetails product={props.product} />
      </Container>
    </div>
  )
}

export default Product