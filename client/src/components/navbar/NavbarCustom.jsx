import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './navbarCustom.css';
import { Link } from 'react-router-dom';


function NavbarCustom() {
return (
<>
<Container fluid className="d-flex justify-content-between navbar-custom-background">
            <Link to="./ "> <img
                src="../../../public/image/logoWerJr1.svg"
                width="120"
                height="100"
                className="d-inline-block align-top mb-2 "
                alt="company logo"
            /></Link>
            <Nav className="mr-auto">
                <Nav.Link href="/junior">Junior</Nav.Link>
                <Nav.Link href="/favorite">Tus Junior</Nav.Link>
                <Nav.Link href="/contact">Contáctame</Nav.Link>

            </Nav>
            <Link to="./login "><img
                src="../../../public/image/userlogo.png"
                width="50"
                height="50"
                className="d-inline-block align-top ml-0" 
                alt="user logo"
            /> </Link>
        </Container>
</>

)

}

export default  NavbarCustom;