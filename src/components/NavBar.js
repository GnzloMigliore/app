import Navbar from "react-bootstrap/NavBar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"

const Menu = () => 

    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Sneakerest</Navbar.Brand>
      <Nav className="me-auto p-3">
        <Nav.Link href="#home">Contacto</Nav.Link>
        <Nav.Link href="#features">Productos</Nav.Link>
        <Nav.Link href="#pricing">Nosotros</Nav.Link>
      </Nav>
      </Container>
    </Navbar>


export default Menu;