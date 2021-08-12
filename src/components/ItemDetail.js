import React from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import ItemCount from "./ItemCount"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const ItemDetail = ({item}) => {
    const img = item.pictureUrl;
    const onAdd = (cantidad) =>{
        console.log(cantidad)
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
                        <ItemCount stock={10} initial={1} onAdd={onAdd}/>
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