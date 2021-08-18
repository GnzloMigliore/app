import Navbar from "react-bootstrap/NavBar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import CartWidget from "./CartWidget"
import '../css/NavBar.css';
import { LinkContainer } from 'react-router-bootstrap'
const Menu = () => {

  return(

    <Navbar className="navbar" bg="dark" variant="dark">
      <Container>
      <LinkContainer to="/">
      <Navbar.Brand href="#home" className="col-3"><img className="logo" src="/images/logo.png" alt="Menu" /></Navbar.Brand>
      </LinkContainer>
      <Nav className="me-auto p-2 col-9 d-flex justify-content-end">
      <ButtonGroup variant="dark">
      <DropdownButton as={ButtonGroup} title="Categorías" variant="dark" id="bg-nested-dropdown">
      <LinkContainer to="/category/1"><Dropdown.Item eventKey="1">Masculino</Dropdown.Item></LinkContainer>
      <LinkContainer to="/category/2"><Dropdown.Item eventKey="2">Femenino</Dropdown.Item></LinkContainer>
     </DropdownButton>
     </ButtonGroup>
     <Nav.Link className="mt-4 nav" href="#home">Contacto</Nav.Link>
        <Nav.Link className="mt-4 nav" href="#features">Productos</Nav.Link>
        <Nav.Link className="mt-4 nav" href="#pricing">Nosotros</Nav.Link>
        <Nav.Link className="mt-4 nav" href="/cart"><CartWidget></CartWidget></Nav.Link>
     
      </Nav>
      </Container>
    </Navbar>
  )}
export default Menu;