import { Col, Row } from "reactstrap"
import ProdutoCard from "./ProdutoCard";
const ProdutosList = ({ products }) => {

  return (
    <>
      <Row className="g-5">
        {products.map(product => (
          <Col md={6} lg={4} xl={3} key={product.id}>
            <ProdutoCard
              product={product}
            />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default ProdutosList