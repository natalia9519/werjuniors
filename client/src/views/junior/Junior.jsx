import "./junior.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

function Junior() {
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
      <main>
      <Container className="d-flex justify-content-center">
          <Row>
            <Col>
              <h1 className="h1-title-page">Junior</h1>
            </Col>
          </Row>
        </Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
               
              </tr>
            ))}
          </tbody>
        </Table>
      </main>
    </>
  );
}

export default Junior;