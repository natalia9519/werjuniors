import "./signUp.css";
import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

function SignUp() {

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
    <>
      <main>
        <Container className="d-flex justify-content-center">
          <Row>
            <Col>
              <h1 className="h1-title-page">Regístrate</h1>
            </Col>
          </Row>
        </Container>
        <Container className="d-flex justify-content-center">
          <Row>
            <Col>
        <section className="section-register">
        {!RegisterOk ? (
                <form>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput" className="tittles">Nombre de la empresa</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Introduce tu nombre de usuario" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2" className="tittles">Contraseña</label>
                        <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Introduce tu contraseña" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2" className="tittles">email</label>
                        <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Introduce tu email" />
                    </div>
                    <div>
                        <input className="form-check-input" type="checkbox" checked={terminosAceptados} onChange={handleTerminosAceptados} />
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            Acepto los términos y condiciones de privacidad.
                        </label>
                    </div>
                    <button onClick={handleRegistrarse} className="btn-form">¿Ya tienes una cuenta?</button>
                    <button onClick={handleRegistrarse} className="btn-form">Registrarse</button>
                </form>
            ) : (
                <div>
                    <p className="text-send">Registro completado</p>
                    <Link to="/" className="btn-form">Volver a inicio</Link>
                </div>
            )}
            </section>
            </Col>
          </Row>

        </Container>
      </main>
    </>
  );
}

export default SignUp;