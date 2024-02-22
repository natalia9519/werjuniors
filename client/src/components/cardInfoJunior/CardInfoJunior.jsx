import "./cardInfoJunior.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { FaHeart } from "react-icons/fa";
import { useState, useEffect } from "react";

function CardInfoJunior() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Realizar la solicitud al backend para obtener los datos de los usuarios utilizando Axios
    axios.get('http://localhost:3000/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los datos de los usuarios', error);
      });
  }, []);


  return (
    <>
     <Container className="d-flex justify-content-center mt-5">
        <Row>
          {users.map((user, index) => ( // Asegúrate de pasar 'index' como segundo argumento en map
            <Col key={index} xs={12} sm={8} md={6} lg={4}>
              <Card className="border-0 mb-3" style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://i.postimg.cc/m2cC8B67/Junior4.png" />
                <Card.Body>
                  <Card.Title className="fw-bold custom-text-color d-flex justify-content-between align-items-center">
                    {user.name}
                    <FaHeart className="d-flex justify-content-end me-4 fs-3" />
                  </Card.Title>
                  <Card.Title>
                  Skills : {Object.entries(user.stack).map(([skill, value]) => (
                      value === "true" ? skill.replace("?", "") : ""
                    )).filter(skill => skill !== "").join(', ')}
                  </Card.Title>
                  <Card.Title>
                    Ciudad: {user.city} 
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default CardInfoJunior;
