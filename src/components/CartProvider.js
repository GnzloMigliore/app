  
import { useState } from "react";
import { Provider } from "../context/CartContext";

const CartProvider = ({ defaultState = [],children}) => {

    const [carrito, setCarrito] = useState(defaultState);

    function agregarAlCarrito (prod, cant) {
        const yaExiste = carrito.find( (item) => item.id === prod.id);
        if (!yaExiste) {
            setCarrito([...carrito, {...prod, cantidad: cant}]);
        } else {
            const newProductos = carrito.map ( (item) => {
                if (item.id === prod.id) {
                    return {...item, cantidad: cant, } 
                } return item;
            });
            setCarrito(newProductos);
        }
    }

    function borrarDelCarrito (id) {
        const borrar = carrito.filter( (item) => item.id !== id);
        setCarrito(borrar);
    }

    function vaciarCarrito () {
        setCarrito(defaultState);
    }

    return (
    <Provider value={{carrito, setCarrito, agregarAlCarrito, borrarDelCarrito, vaciarCarrito}}>
        {children}
    </Provider>
    );
}

export default CartProvider;