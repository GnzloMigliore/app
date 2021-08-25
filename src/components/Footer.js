
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

import '../css/Footer.css';
const Footer = () => {

  return(
   <Navbar className="mt-5" bg="dark" variant="dark">
    <Nav className="justify-content-end mt-2">
    <Nav.Item>
      <Nav.Link className="icon"  href="https://www.facebook.com/"><FaFacebookSquare/></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className="icon"href="https://twitter.com/?lang=es"><FaTwitterSquare/></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className="icon" href="https://www.instagram.com/"><FaInstagramSquare/></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className="icon" eventKey="link-2"> <p>© Todos los derechos reservados.</p></Nav.Link>
    </Nav.Item>
  </Nav>
  </Navbar>

  )}
export default Footer;