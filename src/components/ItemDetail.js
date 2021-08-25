import React from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import ItemCount from "./ItemCount"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useState } from "react"
import { Link } from "react-router-dom"
import CartContext from "../context/CartContext";
import { useContext } from "react";
import  { Button }  from  'react-bootstrap' ;

const ItemDetail = ({producto}) => {

//console.log(producto);
    const img = producto.pictureUrl;

    const {carrito, agregarAlCarrito} = useContext(CartContext);
    const [ terminarCompra, setTerminarCompra ] = useState ();

    
    let initial;
    if (carrito.find( (item ) => item.id === producto.id)) {
        initial = parseInt(carrito.filter( (item ) => item.id === producto.id).map((item) => item.cantidad));
    } else {
        initial = 1;
    }


    const onAdd = () => {         
        setTerminarCompra(
        <div>
              <Container>
                <Row>
                <Col>
                <Link to={`/`} className="terminar">
            <div className="boton-terminar"><Button  variant="secondary">SEGUIR COMPRANDO</Button></div></Link>
            </Col>
            <Col>
         
            <Link to={`/cart`} className="terminar"><div className="boton-terminar"><Button  variant="dark">TERMINAR COMPRA</Button></div></Link>
            </Col>
            </Row>
           </Container>
        </div>
            );
    }
    return (
        <>
            <CardColumns className="d-flex justify-content-center mt-0">
                <Card   style={{ width: '55rem' }}>
                    <Card.Body>
                    <Container>
                      <Row>
                      <Col>
                       <Card.Img  src={img}  />
                       </Col>
                       <Col>
                        <Card.Title className="d-flex justify-content-center mt-5"><h1>{producto.title}</h1>
                        </Card.Title>
                        <Card.Subtitle className="d-flex justify-content-center mt-3">{producto.category}</Card.Subtitle>
                      
                        <Card.Text className="d-flex justify-content-center">
                            {producto.description}
                        </Card.Text>
                        <h5 className="text-center mt-5">$ {producto.price}</h5>
                           <div  className="justify-content-center mt-4">
                           <ItemCount producto={producto} stock={producto.stock} initial={initial}agregarAlCarrito={agregarAlCarrito}  onAdd={onAdd} />
                           </div>
                        
                        <div className="justify-content-center mt-4">{terminarCompra}</div>
                        </Col>
                        </Row>
                         </Container>
                    </Card.Body>
                </Card>
            </CardColumns>
         
         
          
        </>
    )
}

export default ItemDetail