import './carrouselHome.css'
import Carousel from 'react-bootstrap/Carousel';
//import CardInfoJunior from '../cardInfoJunior/CardInfoJunior.jsx';
import axios from "axios";
import { useState, useEffect } from "react";

function CarrouselHome() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(response => {
        setUsers(response.data);
        console.log(response.data); // Aquí se agregó el console.log
      })
      .catch(error => {
        console.error('Error al obtener los datos de los usuarios', error);
      });
  }, []);

  return (
    <Carousel>
    {users.map((user, index) => (
      <Carousel.Item key={index}>
        <section className='photo-home-carrousel'>
        <img
          src={user.photo}
          className="photo-home"
          alt={`Imagen de ${user.name}`}
        />
        </section>
        <Carousel.Caption>
          <h3>{user.name}</h3>

          <p>Ciudad: {user.city}</p>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
  );
}

export default CarrouselHome;

