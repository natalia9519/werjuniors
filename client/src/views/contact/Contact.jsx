import './contact.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import React, { useState } from "react";


function Contact () {

  const [MessageOk, setMessage] = useState(false);
  const [terminosAceptados, setTerminosAceptados] = useState(false);

  const handleMessage = (e) => {
    e.preventDefault();
    if (terminosAceptados) {
      setMessage(true);
    } else {
      alert("Debes aceptar los términos y condiciones de privacidad");
    }
  }


  const handleTerminosAceptados = () => {
    setTerminosAceptados(!terminosAceptados);
  }


    return (
        <>
        <main>
        <Container className="d-flex justify-content-center">
          <Row>
            <Col>
              <h1 className="h1-title-page">Contáctame</h1>
            </Col>
          </Row>
        </Container>
        <Container className="d-flex justify-content-center">
        <Row>
          <Col>
            <section className="section-work-with-us">
              {!MessageOk ? (
                <form>
                  <div className="form-group">
                    <label htmlFor="formGroupExampleInput" className="tittles">Nombre</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Introduce tu nombre de usuario" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="formGroupExampleInput" className="tittles">Nombre del junior</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Introduce el nombre del junior" />
                  </div>
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

                  <button onClick={handleMessage} className="btn-form">Enviar</button>
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
      </>
    )
}

export default Contact;