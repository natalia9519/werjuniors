import "./junior.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function Junior() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Realizar la solicitud al backend para obtener los datos de los usuarios
    fetch('URL_DEL_ENDPOINT_DEL_BACKEND')
      .then(response => response.json())
      .then(data => setUsers(data));
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
              {/* Agregar más encabezados según sea necesario */}
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                {/* Agregar más celdas según sea necesario */}
              </tr>
            ))}
          </tbody>
        </Table>
      </main>
    </>
  );
}

export default Junior;