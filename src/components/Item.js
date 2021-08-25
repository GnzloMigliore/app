import Card from "react-bootstrap/Card"
import  { Button }  from  'react-bootstrap' ;
import Col from "react-bootstrap/Col"
import '../css/Item.css';
import { LinkContainer } from 'react-router-bootstrap'
const item = ({product}) => {

    return (

    <Col>
        <Card className="card" style={{ width: '15rem' }}>
        <LinkContainer to={`/item/${product.id}`}><Card.Img className="imagen" variant="top" src={product.pictureUrl} /></LinkContainer> 
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          <Card.Text>
            ${product.price}
          </Card.Text>
         <LinkContainer to={`/item/${product.id}`}><Button className="m-2" variant="secondary">Ver más</Button></LinkContainer> 
        </Card.Body>
      </Card></Col>
     

    )
    }


    export default item;