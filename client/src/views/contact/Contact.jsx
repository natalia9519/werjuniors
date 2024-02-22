import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './contact.css';

const URI = 'http://localhost:3000/users';

const Contact = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const res = await axios.get(`${URI}/${id}`);
        setUser(res.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    getUserDetails();
  }, [id]);

  return (
    <>
    <main>
     <Container className="d-flex justify-content-center">
            <Row>
              <Col>
                <h1 className="h1-title-page">Contactame</h1>
              </Col>
            </Row>
    </Container>
      <section>
     
         <aside key={user.id}>
          <div className='div-home-recipe'>
          <div className="recipe-unic-image-content">
           <img src={user.photo} alt='Imagen de la receta' className='image-blog'/>  
           <div>
            <p className="recipe-content"> {user.name}</p>
            </div>
            </div>
           
            <p><Link className="link-go-back" to={'/'}>Volver al blog</Link></p>
          </div>
        </aside>
      </section>
    </main>
    </>
  );
}

export default Contact;