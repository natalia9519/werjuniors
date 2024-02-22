import "./favorite.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardInfoJunior from "../../components/cardInfoJunior/CardInfoJunior";

function Favorite() {
  return (
    <>
      <main>
        <Container className="d-flex justify-content-center">
          <Row>
            <Col>
              <h1 className="h1-title-page">Tus Juniors</h1>
            </Col>
          </Row>
        </Container>
        <CardInfoJunior />
      </main>
    </>
  );
}
export default Favorite;