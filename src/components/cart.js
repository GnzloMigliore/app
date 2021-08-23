import CartContext from "../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import { BsTrashFill } from "react-icons/bs";
import  { Button }  from  'react-bootstrap' ;
import Container from "react-bootstrap/Container"
import { LinkContainer } from 'react-router-bootstrap'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import '../css/Cart.css';

const Carrito = (item) => {

    const {carrito, borrarDelCarrito, vaciarCarrito, precioTotal} = useContext(CartContext);

  


    return (
        <>
       
            <h3 className="title mb-5">CARRITO DE COMPRAS</h3>
           
            <Container>
           <Row>
           <Col>
            { carrito.length > 0 ? carrito.map( (item) => <div className="carro"> <ItemCart key={item.id} item={item} borrarDelCarrito={borrarDelCarrito} /></div>) : <article><div className="sinStock">No hay productos en tu carrito. Te invitamos a que visites nuestra <Link to={`/`}><span className="sin_items">HOME</span></Link></div></article>}
            </Col>
            <Col>
           <Container>
            <Row>
           
           <Col></Col>
  
           <Col>
           { carrito.length > 0 ?
          <div> <h1 className="resumen">RESUMEN DE COMPRA</h1></div>
           : null
           }
            <section className="vaciar">
           
          
            { carrito.length > 0 ?
            <div className="total">

                    <p>Total: $<span> {precioTotal}</span></p>
          
          
            </div>
            : null
            }
              { carrito.length > 0 ?
             <div className="vaciar_carrito">
                <BsTrashFill className="trash" onClick={vaciarCarrito}  alt="" />
                <p>Vaciar el carrito</p>
                </div> : null } 
                { carrito.length > 0 ?
                <div>
                <div className="checkout mt-2">
                <Button variant="dark" id="botonCheckout"  href="">FINALIZAR COMPRA</Button>
                </div>
                <div className="checkout">
                <LinkContainer to="/">
                <Button variant="secondary mt-3 mb-4" id="botonCheckout"  href="">SEGUIR COMPRANDO</Button>
                </LinkContainer>
                </div>
                </div>
                 : null
                }
           </section>
           </Col>   
            </Row>
          </Container>
          </Col>
          </Row>
          </Container>
        </>
    );
}

export default Carrito;