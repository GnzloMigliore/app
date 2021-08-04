import Navbar from "react-bootstrap/NavBar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import CartWidget from "./CartWidget"
import '../css/NavBar.css';

const Menu = () => {

  return(

    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home" className="col-3"><img className="logo" src="/images/logo.png" alt="Menu" /></Navbar.Brand>

      <Nav className="me-auto p-2 col-9 d-flex justify-content-end">
        <Nav.Link href="#home">Contacto</Nav.Link>
        <Nav.Link href="#features">Productos</Nav.Link>
        <Nav.Link href="#pricing">Nosotros</Nav.Link>
        <Nav.Link href="#pricing"><CartWidget></CartWidget></Nav.Link>
     
      </Nav>
      </Container>
    </Navbar>
  )}
export default Menu;