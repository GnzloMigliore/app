import '../css/Cart.css';
import { Link } from "react-router-dom";
import { BsTrashFill } from "react-icons/bs";
import { Container } from 'react-bootstrap';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
const ItemCart = ( {item, borrarDelCarrito} ) => {

    let subtotal = item.cantidad * item.price;
 let img =item.pictureUrl;
    return (
        <>
           <Container>
           <Row>
        
           <Col>  
                    <Link to={`/producto/${item.prod_id}`}>
                        <img className="img" src={img} alt={item.altimg} title={item.titulo} />
                    </Link>
           </Col>
            <Col>
            <div>
                    <h4  className="title">{item.title}</h4>
                  
            </div>
            </Col>
            <Col>
            <div >
                    <p className="cantidad">Cantidad: {item.cantidad}</p>
            </div>
             </Col>
              <Col>
              <div >
                    <p className="subtotal">Subtotal: ${subtotal}</p>
              </div>
              </Col>
              <Col>
              <div className="item__delete">
                <BsTrashFill className="trash1" onClick={ ()=> borrarDelCarrito(item.name, item.id)}  alt="eliminar" title="eliminar el producto del carrito" />
              </div>
              </Col>
     
        </Row>
        </Container>
       
    </>
    );
}

export default ItemCart;