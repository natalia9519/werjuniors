import "./login.css";
import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const URI = 'http://localhost:3000/client/';

function Login() {
  const [LoginOk, setLogin] = useState(false);
   const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();


  const store = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(URI);
      const users = response.data; 

      const user = users.find(user => user.email === email && user.password === password);
      if (user) {
        setLogin(true);
        alert('Bienvenido ' + email);
      } else {
        alert('Las credenciales no son válidas');
      }
    } catch (error) {
      console.error('Error al verificar las credenciales', error);
    }
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
            <section>


              <aside className="section-login">
                {!LoginOk ? (
                  <form onSubmit={store}>

                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2" className="tittles">email</label>
                        <input type="email" value={email}
                        onChange={(e) => setEmail(e.target.value)} className="form-control" id="formGroupExampleInput3" placeholder="Introduce tu email" />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="formGroupExampleInput2" className="tittles">Contraseña</label>
                      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="formGroupExampleInput2" placeholder="Introduce tu contraseña" />
                    </div>



                    <button type='submit' className="btn-form">Entrar</button>
                  </form>
                  
                ) : (
                  <div>
                    <p className="text-send">Bienvenido</p>
                    <Link to="/" className="btn-form">Volver a inicio</Link>
                  </div>
                )}
               
              </aside>
               <Link to="/signup" className="btn-form">¿No tienes cuenta?</Link>
               </section>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default Login;

