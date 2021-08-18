import  { Button }  from  'react-bootstrap' ;
import { useState } from "react";

const ItemCount = ({producto, stock, initial, agregarAlCarrito, onAdd}) => {

    let [contador, setContador] = useState (initial);

    // Si el contador es menor que el stock, se incrementa en 1
    const sumarCant = () => {
        if (contador < stock) {
            setContador(parseInt(contador + 1));
        }
    }
        // Si el contador es mayor que 1, se decrementa 1
    const restarCant = () => {
        if ( contador > 1) {
            setContador(parseInt(contador - 1));
        }
    }

    return (
        <>
            <div className="d-flex justify-content-center mt-4">
                <Button variant="secondary" className="boton_cant_detail m-2" onClick={restarCant}>-</Button>
                <h5 className="item__cant_detail m-3">{contador}</h5>
                <Button variant="secondary" className="boton_cant_detail m-2" onClick={sumarCant}>+</Button>
                { (stock > 0)
            ? 
            <Button variant="dark" className="m-2" onClick={ () => { agregarAlCarrito(producto, contador); onAdd()}} >Agregar al carrito</Button>
          
            :
            <Button variant="dark" className="add_detail_disabled">Producto sin stock</Button>
            }
            </div>
          
    
            
        </>
    );  
};

export default ItemCount;