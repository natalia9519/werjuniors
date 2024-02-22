import './footer.css'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";




function Footer() {

    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <div className=" mt-3 ms-3 ">
                        <a className="footer-icons" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a className="footer-icons" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter />
                        </a>
                        <a className="footer-icons" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
                        </a>
                        <div className='text'><p>@2024 Todos los derechos reservados</p></div>
                    </div>

                    <div className='logo'><img src="../../../public/image/logoWerJr1-2.svg" alt="Logo" /></div>

                    <div className="footer-info">

                        <a href="#">Nuestro equipo</a>
                        <a href="#">Términos y condiciones</a>
                        <a href="./workwithus">Trabaja con nosotros</a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;