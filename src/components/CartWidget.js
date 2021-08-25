
import { Link } from 'react-router-dom'
import { BiCart } from "react-icons/bi";
import CartContext from "../context/CartContext";
import { useContext, useState, useEffect } from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
const Carrito = () => {

    const {carrito, cartelAviso } = useContext(CartContext);
    const [numIcono, setNumIcono] = useState();

    useEffect ( () => {
        setNumIcono(carrito.length);
        }, [carrito.length]
    );
//console.log(carrito.length);
    return (
        <>
         <Container>
         <Row>
         <Col>
         <div><Link to={`/cart`}><BiCart className="carrito" ></BiCart></Link></div>
         </Col>
         <div className="monto carro_font">{numIcono}</div>
         <Col>
         </Col>
               
               
        </Row>
          </Container>
         
            <div  className="pop__cartwidget sombra">{cartelAviso}</div>
        </>
    );
};

export default Carrito;
