import './cardInfoJunior.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function CardInfoJunior() {

    return (
        <>
         <Container>
                <Row>
                    <Col>
                        <Card body className="d-flex align-items-center">
                          <Card.Img src="holder.js/171x180" roundedCircle />
                          
                            <Card.Title>Nombre: Juan Pérez</Card.Title>
                            <Card.Subtitle>Experiencia: 2 años</Card.Subtitle>
                            <Card.Text>Stack: React, Node, MongoDB</Card.Text>
                          
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default CardInfoJunior;