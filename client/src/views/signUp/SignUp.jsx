import "./signUp.css";
import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


const URI = 'http://localhost:3000/client/'


function SignUp() {


   const [RegisterOk, setRegistrado] = useState(false);
   const [terminosAceptados, setTerminosAceptados] = useState(false);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
   const navigate = useNavigate()

  const store = async (e) => {
      e.preventDefault()
      await axios.post(URI, { name: name, email: email, password: password })
      navigate('/')
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
            <section>
        <aside className="section-register">
        {!RegisterOk ? (
                <form onSubmit={store}>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput" className="tittles">Nombre de la empresa</label>
                        <input type="text" value={name}
                        onChange={(e) => setName(e.target.value)} className="form-control" id="formGroupExampleInput" placeholder="Introduce tu nombre de usuario" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2" className="tittles">Contraseña</label>
                        <input type="password" value={password}
                        onChange={(e) => setPassword(e.target.value)} className="form-control" id="formGroupExampleInput2" placeholder="Introduce tu contraseña" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2" className="tittles">email</label>
                        <input type="email" value={email}
                        onChange={(e) => setEmail(e.target.value)} className="form-control" id="formGroupExampleInput3" placeholder="Introduce tu email" />
                    </div>
                    <div>
                        <input className="form-check-input" type="checkbox" checked={terminosAceptados} onChange={handleTerminosAceptados} />
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            Acepto los términos y condiciones de privacidad.
                        </label>
                    </div>
                    
                    <button type='submit' className="btn-form">Registrarse</button>
                </form>
            ) : (
                <div>
                    <p className="text-send">Registro completado</p>
                    <Link to="/" className="btn-form">Volver a inicio</Link>
                </div>
            )}
                          </aside>
               <Link to="/login" className="btn-signup">¿Ya tienes una cuenta?</Link>
               </section>
            </Col>
          </Row>

        </Container>
      </main>
    </>
  );
}

export default SignUp;

