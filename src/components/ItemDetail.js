import React from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import ItemCount from "./ItemCount"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useState } from "react"
import { Link } from "react-router-dom"
import  { Button }  from  'react-bootstrap' ;
const ItemDetail = ({item}) => {
    const img = item.pictureUrl;
    const [cartItems, setCartItems] = useState(0)

    const onAdd = (cantidad) => {
        console.log(`se han agregado ${cantidad} producto/s al carrito`)
        setCartItems(cartItems + cantidad)
    
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
                        <Card.Title className="d-flex justify-content-center mt-5"><h1>{item.title}</h1>
                        </Card.Title>
                        <Card.Subtitle className="d-flex justify-content-center mt-3">{item.category}</Card.Subtitle>
                      
                        <Card.Text className="d-flex justify-content-center">
                            {item.description}
                        </Card.Text>
                        <h5 className="text-center mt-5">$ {item.price}</h5>
                        {cartItems >= 1 ? <Link to="/cart"><Button style={{width:"100%"}} variant ="dark" className="button">Terminar mi compra</Button></Link>  
                        : <ItemCount initial={1} stock={5} onAdd={onAdd} />}
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