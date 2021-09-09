import Navbar from "react-bootstrap/NavBar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import CartWidget from "./CartWidget"
import '../css/NavBar.css';
import { LinkContainer } from 'react-router-bootstrap'
const Menu = () => {

  return(

    <Navbar className="navbar p-0" bg="dark" variant="dark">
      <Container>
      <LinkContainer to="/">
      <Navbar.Brand href="#home" className="col-3"><img className="logo" src="/images/logo.png" alt="Menu" /></Navbar.Brand>
      </LinkContainer>
      <Nav className="me-auto p-2 col-9 d-flex justify-content-end p-0">
     <Nav.Link className="mt-4 nav" href="/ejemplo">Navegabilidad</Nav.Link>
        <Nav.Link className="mt-4 nav" href="#features">Productos</Nav.Link>
        <Nav.Link className="mt-4 nav" href="#pricing">Nosotros</Nav.Link>
        <Nav.Link className="mt-4 nav" href="/cart"><CartWidget></CartWidget></Nav.Link>
     
      </Nav>
      </Container>
    </Navbar>
  )}
export default Menu;