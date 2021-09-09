import CartContext from "../context/CartContext";
import { useContext} from "react";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import { BsTrashFill } from "react-icons/bs";
import  { Button }  from  'react-bootstrap' ;
import Container from "react-bootstrap/Container"
import { LinkContainer } from 'react-router-bootstrap'
import Footer from "./Footer"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import FormContainer from "./FormContainter";
import '../css/Cart.css';

const Carrito = () => {
  
    const {carrito, borrarDelCarrito, vaciarCarrito, precioTotal} = useContext(CartContext);

  
    return (
        <>
       
           <article class="col-8 mx-auto">
                <h2 class="titulo-crear pb-3 border-bottom text-center pt-5 mx-auto text-uppercase">CARRITO</h2>
            </article>
           
            <Container>
           <Row>
           {carrito.length === 0 ?
           <article><div className="sinStock">No hay productos en tu carrito. Te invitamos a que visites nuestra <Link to={`/`}><span className="sin_items">HOME</span></Link></div></article>: null
             }
           <Col>
            { carrito.length > 0 ? carrito.map( (item) => <div className="carro"> <ItemCart key={item.id} item={item} borrarDelCarrito={borrarDelCarrito} /></div>) : null }
            { carrito.length > 0 ?
             <FormContainer   cart={carrito} /> : null
             }
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
          { carrito.length > 0 ?
         <Footer /> : null
             }
          
         
        </>
    );
}

export default Carrito;