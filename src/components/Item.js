import Card from "react-bootstrap/Card"
import  { Button }  from  'react-bootstrap' ;
import Col from "react-bootstrap/Col"
import '../css/Item.css';
import { LinkContainer } from 'react-router-bootstrap'
const item = ({product}) => {
const name = product.title;
const img = product.pictureUrl;
const price = product.price;
const model = product.model;
const description = product.description;
    return (

    <Col>
        <Card className="card" style={{ width: '15rem' }}>
        <Card.Img className="imagen" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {model}
          </Card.Text>
          <Card.Text>
            {description}
          </Card.Text>
          <Card.Text>
            ${price}
          </Card.Text>
         <LinkContainer to={`/item/${product.id}`}><Button className="m-2" variant="secondary">Ver más</Button></LinkContainer> 
        </Card.Body>
      </Card></Col>
     

    )
    }


    export default item;