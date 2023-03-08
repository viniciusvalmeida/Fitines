// export default function Produtos(props){
//   return <h1>PRODUTOS</h1>
// }

// pages/products.tsx

import Head from 'next/head'
import { Container } from 'reactstrap'
import ProdutosList from './src/components/ProdutosList'
import { fetchProdutos } from './src/services/produtos'

export const getStaticProps = async () => {
  const products = await fetchProdutos()
  return { props: { products } }
}

const Products = (props) => {
  return (
    <>
      <Head>
        <title>Nossos Produtos</title>
        <meta name="description" content="Conheça todos os nossos produtos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container className="mb-5">
          <h1 className="my-5">
            Nossos Produtos
          </h1>

          {<ProdutosList products={props.products} />}
        </Container>
      </main>
    </>
  )
}

export default Products