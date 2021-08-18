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
                    <h4  className="titulo mt-5">{item.title}</h4>
                    <p  className="descripcion" title={item.descripcion}>{item.description}...</p>
                </div>
    
           
                <div >
                    <p className="precio" title="Precio por unidad">${item.price}</p>
                </div>
                <div >
                    <p className="cantidad">cantidad: {item.cantidad}</p>
                </div>
                <div >
                    <p className="subtotal">Subtotal: $<span>{subtotal}</span></p>
                </div>
                <div className="item__delete">
                <BsTrashFill className="trash1" onClick={ ()=> borrarDelCarrito(item.name, item.id)}  alt="eliminar" title="eliminar el producto del carrito" />
                </div>
         
        <div className="aclara_cant">
            <p>* Stock disponible de {item.titulo}: {item.stock} unidad/es. Para cambiar la cantidad hacer click en la imagen</p>
        </div>
        </Col>
        </Row>
        </Container>
    </>
    );
}

export default ItemCart;