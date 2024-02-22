import './workWithUs.css'
import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';

function WorkWithUs() {

  const [RegisterOk, setRegistrado] = useState(false);
  const [terminosAceptados, setTerminosAceptados] = useState(false);

  const handleRegistrarse = (e) => {
    e.preventDefault();
    if (terminosAceptados) {
      setRegistrado(true);
    } else {
      alert("Debes aceptar los términos y condiciones de privacidad");
    }
  }


  const handleTerminosAceptados = () => {
    setTerminosAceptados(!terminosAceptados);
  }

  return (
    
    <main>
      <Container className="d-flex justify-content-center">
        <Row>
          <Col>
            <h1 className="h1-title-page">Trabaja con nosotros</h1>
          </Col>
        </Row>
      </Container>
      <Container className="d-flex justify-content-center">
        <Row>
          <Col>
            <section className="section-work-with-us">
              {!RegisterOk ? (
                <form>
                  <div className="form-group">
                    <label htmlFor="formGroupExampleInput" className="tittles">Nombre</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Introduce tu nombre de usuario" />
                  </div>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Curriculum Vitae</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                  <div className="form-group">
                    <label htmlFor="formGroupExampleInput2" className="tittles">email</label>
                    <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Introduce tu email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="formGroupExampleInput2" className="tittles">Mensaje</label>
                    <textarea type="password" className="form-control" id="formGroupExampleInput2" placeholder="Introduce tu email" />
                  </div>
                  <div>
                        <input className="form-check-input" type="checkbox" checked={terminosAceptados} onChange={handleTerminosAceptados} />
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            Acepto los términos y condiciones de privacidad.
                        </label>
                    </div>

                  <button onClick={handleRegistrarse} className="btn-form">Enviar</button>
                </form>
              ) : (
                <div>
                  <p className="text-send">Hemos recibido tu Curriculum</p>
                  <Link to="/" className="btn-form">Volver a inicio</Link>
                </div>
              )}
            </section>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default WorkWithUs;