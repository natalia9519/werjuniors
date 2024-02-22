import "./homeView.css";
import CarrouselHome from "../../components/carrouselHome/CarrouselHome";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomeView() {
  return (
    <>
      <main>
      <Container className="d-flex justify-content-center">
          <Row>
            <Col>
              <h1 className="h1-title-page">Nuestros coders</h1>
            </Col>
          </Row>
        </Container>
        <CarrouselHome />
      </main>
    </>
  );
}

export default HomeView;