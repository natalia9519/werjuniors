import "./cardInfoJunior.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function CardInfoJunior() {
  return (
    <>
      <Container className="d-flex justify-content-center ">
        <Row>
          <Col>
            <Card className="border-0" style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://i.postimg.cc/7YhThmnX/junior1.png" />
              <Card.Body>
              <Card.Title className="fw-bold custom-text-color">NOMBRE</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CardInfoJunior;
