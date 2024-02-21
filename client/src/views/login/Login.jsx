import "./login.css";
import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

function Login() {

  const [LoginOk, setLogin] = useState(false);


  const handleLogin = (e) => {
    e.preventDefault();
    if (terminosAceptados) {
      setLogin(true);
    } else {
      alert("Debes aceptar los términos y condiciones de privacidad");
    }
  }
  const navigateToSignUp = () => {
    history.push("/signUp");
  }

  return (
    <>
      <main className="main-form">
        <Container className="d-flex justify-content-center">
          <Row>
            <Col>
              <h1 className="h1-title-page">Login</h1>
            </Col>
          </Row>

        </Container>
        <Container className="d-flex justify-content-center">
          <Row>
            <Col>
              <section className="section-login">
                {!LoginOk ? (
                  <form>
                    <div className="form-group">
                      <label htmlFor="formGroupExampleInput" className="tittles">Nombre de usuario</label>
                      <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Introduce tu nombre de usuario" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="formGroupExampleInput2" className="tittles">Contraseña</label>
                      <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Introduce tu contraseña" />
                    </div>

                    <button onClick={handleLogin} className="btn-form">¿No tienes cuenta?</button>
                    <button onClick={handleLogin} className="btn-form">Entrar</button>
                  </form>
                ) : (
                  <div>
                    <p className="text-send">Bienvenido</p>
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

export default Login;
