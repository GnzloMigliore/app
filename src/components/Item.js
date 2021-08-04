import Card from "react-bootstrap/Card"
import  { Button }  from  'react-bootstrap' ;
import ItemCount from "./ItemCount"
import Col from "react-bootstrap/Col"
import '../css/Item.css';

const item = ({product}) => {
const name = product.name;
const img = product.pictureUrl;
const price = product.price;
const model = product.model;
const description = product.description;
    return (

    <Col>
        <Card className="card" style={{ width: '18rem' }}>
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
          <ItemCount stock={20} initial={1}></ItemCount>
          <Button className="m-2" variant="secondary">Ver más</Button>
        </Card.Body>
      </Card></Col>
     

    )
    }


    export default item;