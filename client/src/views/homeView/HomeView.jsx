import "./homeView.css";
import CarrouselHome from "../../components/carrouselHome/CarrouselHome";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CarrouselHome from "../../components/carrouselHome/CarrouselHome";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function HomeView() {
  return (
    <>
      <main>

      <img src="https://i.postimg.cc/wHBRhggW/Chicohome4.png" className="imgchicohome" alt="Imagen Portada Home" />
      <Container className="d-flex justify-content-center">
          <Row>
            <Col>
              <h1 className="h1-title-page">Nuestros coders</h1>
            </Col>
          </Row>
        </Container>
        <CarrouselHome />

        <img src="https://i.postimg.cc/qRn7sZW9/gruposobre-Nosotros1.png" className="imgchomenosotros" alt="Sobre nosotros" />

      </main>
    </>
  );
}

export default HomeView;