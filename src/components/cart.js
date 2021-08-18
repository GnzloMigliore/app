import CartContext from "../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import { BsTrashFill } from "react-icons/bs";
import  { Button }  from  'react-bootstrap' ;
import '../css/Cart.css';

const Carrito = () => {

    const {carrito, borrarDelCarrito, vaciarCarrito, precioTotal} = useContext(CartContext);

    
    return (
        <>
            <section>
            <h3 className="title mb-5">CARRITO DE COMPRAS</h3>
           
           
            { carrito.length > 0 ? carrito.map( (item) => <ItemCart key={item.id} item={item} borrarDelCarrito={borrarDelCarrito} />) : <article><div className="sinStock">No hay productos en tu carrito. Te invitamos a que visites nuestra <Link to={`/`}><span className="sin_items">HOME</span></Link></div></article>}
            </section>
            <section className="vaciar">
            { carrito.length > 0 ? <div className="vaciar_carrito">
                <BsTrashFill className="trash" onClick={vaciarCarrito}  alt="" />
                <p>vaciar el carrito</p>
                </div> : null } 
             </section>
             <section className="check-out">
            { carrito.length > 0 ?
            <div className="total">
                <div>
                    <p>Total: $<span> {precioTotal}</span></p>
            <Button variant="dark" id="botonCheckout" className="checkout" href="">Check out</Button>
            </div>
            </div>
            : null
            }
           </section>
        </>
    );
}

export default Carrito;